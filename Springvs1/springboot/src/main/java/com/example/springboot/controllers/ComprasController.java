package com.example.springboot.controllers;
import com.example.springboot.dtos.ClienteRecordDto;
import com.example.springboot.dtos.ComprasRecordDto;
import com.example.springboot.models.ClienteModel;
import com.example.springboot.models.ComprasModel;
import com.example.springboot.repositories.ComprasRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ComprasController {

    @Autowired
    ComprasRepository comprasRepository;

    @GetMapping("/compras")
    public ResponseEntity <List<ComprasModel>> getALlCompras(){
        return ResponseEntity.status(HttpStatus.OK).body(comprasRepository.findAll());
    }

    @GetMapping("/compras/{id}")
    public ResponseEntity<Object> getOneCompra(@PathVariable(value="id")Long id){
        Optional<ComprasModel> compra0 = comprasRepository.findById(id);
        if (compra0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("COMPRA NÃO ENCONTRADA, VERIFIQUE!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(compra0.get());
    }

    @PutMapping("/compras/{id}")
    public ResponseEntity<Object> updateCompra(@PathVariable(value="id") Long id,
                                                @RequestBody @Valid() ComprasRecordDto comprasRecordDto){
        Optional<ComprasModel> compra0 = comprasRepository.findById(id);
        if (compra0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("COMPRA INEXISTENTE! VERIFIQUE AS INFORMAÇÕES!");
        }
        var comprasModel = compra0.get();
        BeanUtils.copyProperties(comprasRecordDto, comprasModel);
        return ResponseEntity.status(HttpStatus.OK).body(comprasRepository.save(comprasModel));
    }
}

//    @DeleteMapping("/cliente/{id}")
//    public ResponseEntity<Object> deleteCliente(@PathVariable(value = "id") Long id){
//        Optional<ClienteModel> cliente0 = clienteRepository.findById(id);
//        if (cliente0.isEmpty()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
//        }
//        clienteRepository.delete(cliente0.get());
//        return ResponseEntity.status(HttpStatus.OK).body("CLIENTE DELETADO COM SUCESSO!");
//    }
//}
