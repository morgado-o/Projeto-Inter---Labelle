package com.example.springboot.controllers;
import com.example.springboot.dtos.ComprasComItensRecordDto;
import com.example.springboot.models.ClienteModel;
import com.example.springboot.models.ComprasModel;
import com.example.springboot.models.FuncionarioModel;
import com.example.springboot.models.ItensCompraModel;
import com.example.springboot.models.ProcedimentoModel;
import com.example.springboot.repositories.ClienteRepository;
import com.example.springboot.repositories.ComprasRepository;
import com.example.springboot.repositories.FuncionarioRepository;
import com.example.springboot.repositories.ItensCompraRepository;
import com.example.springboot.repositories.ProcedimentoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ComprasCentralController {

    @Autowired
    private ComprasRepository comprasRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ItensCompraRepository itensCompraRepository;

    @Autowired
    private ProcedimentoRepository procedimentoRepository;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @PostMapping("/compras-central")
    public ResponseEntity<Object> compraComItens0(@RequestBody @Valid ComprasComItensRecordDto comprasComItensRecordDto) {
        // Busca cliente pelo idCliente
        Optional<ClienteModel> clienteO = clienteRepository.findById(comprasComItensRecordDto.cliente_id());
        if (clienteO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado.");
        }

        ClienteModel cliente = clienteO.get();

        //Criar a entidade Compra
        ComprasModel compra = new ComprasModel();
        compra.setCliente(cliente);
        compra.setTipoPagamento(comprasComItensRecordDto.tipoPagamento());
        compra.setDtCompra(comprasComItensRecordDto.dtCompra());

        // Variável para calcular o valor total da compra
        double valorTotal = 0.0;

        // Lista para armazenar os itens
        List<ItensCompraModel> itensCompra = new ArrayList<>();

        // Processar os itens da compra
        for (ComprasComItensRecordDto.ItensCompraRecordDto itemDto : comprasComItensRecordDto.itens()) {
            // Consulta o procedimento
            Optional<ProcedimentoModel> procedimentoOptional = procedimentoRepository.findById(itemDto.procedimento_id());
            if (procedimentoOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Procedimento não encontrado para ID: " + itemDto.procedimento_id());
            }

            // Vincular funcionário
            Optional<FuncionarioModel> funcionarioOptional = funcionarioRepository.findById(itemDto.funcionario_id());
            if (funcionarioOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado para ID: " + itemDto.funcionario_id());
            }

            // Criar o item de compra
            ItensCompraModel itemCompra = new ItensCompraModel();
            itemCompra.setCompra(compra);
            itemCompra.setProcedimento(procedimentoOptional.get());
            itemCompra.setFuncionario(funcionarioOptional.get());
            itemCompra.setQtSessao(itemDto.qtSessao());
            itemCompra.setStatus(itemDto.status());
            itemCompra.setDataAgenda(itemDto.dataAgenda());

            //Calcular e configurar o valor total da sessão
            //double valorTotalSessao = procedimentoOptional.get().getValorSessao() * itemDto.qtSessao();
            //itemCompra.setValorTotalSessao(valorTotalSessao);

            //Valor total será calculado pelo banco de dados
            itemCompra.setValorTotalSessao(null);

            //linhas para realizar o cálculo dentro do java
            //Somar ao valor total da compra
           //valorTotal += valorTotalSessao;

            // Adicionar o item à lista
            itensCompra.add(itemCompra);
        }
        //implementada trigger para fazer cálculo via banco
        //Atualizar o valor total da compra
        //compra.setValotTotal(valorTotal);
        compra.setValotTotal(null);

        // Salvar a compra no banco (somente uma vez)
        ComprasModel compraSalva = comprasRepository.save(compra);

        // Salvar os itens da compra no banco
        itensCompraRepository.saveAll(itensCompra);

        return ResponseEntity.status(HttpStatus.CREATED).body("Compra e itens criados com sucesso!");
    }

}

