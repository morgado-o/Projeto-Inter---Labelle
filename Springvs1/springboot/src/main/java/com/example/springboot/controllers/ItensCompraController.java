package com.example.springboot.controllers;
import com.example.springboot.dtos.ComprasRecordDto;
import com.example.springboot.dtos.ItensCompraRecordDto;
import com.example.springboot.models.ComprasModel;
import com.example.springboot.models.ItensCompraModel;
import com.example.springboot.repositories.ComprasRepository;
import com.example.springboot.repositories.ItensCompraRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
public class ItensCompraController {

    @Autowired
    ItensCompraRepository itensCompraRepository;

    @GetMapping("/itens-compra")
    public ResponseEntity<List<ItensCompraModel>> getALlitensCompra(){
        return ResponseEntity.status(HttpStatus.OK).body(itensCompraRepository.findAll());
    }

    @GetMapping("/itens-compra/{id}")
    public ResponseEntity<Object> getOneitensCompra(@PathVariable(value="id")Long id){
        Optional<ItensCompraModel> itensCompra0 = itensCompraRepository.findById(id);
        if (itensCompra0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("VERIFIQUE AS INFORMAÇÕES DA CONSULTA!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(itensCompra0.get());
    }

    @PutMapping("/itens-compra/{id}")
    public ResponseEntity<Object> updateItensCompra(@PathVariable(value="id") Long id,
                                               @RequestBody @Valid() ItensCompraRecordDto itensCompraRecordDto){
        Optional<ItensCompraModel> itenscompra0 = itensCompraRepository.findById(id);
        if (itenscompra0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("VERIFIQUE AS INFORMAÇÕES DA CONSULTA!");
        }
        var itensCompraModel = itenscompra0.get();
        BeanUtils.copyProperties(itensCompraRecordDto, itensCompraModel);
        return ResponseEntity.status(HttpStatus.OK).body(itensCompraRepository.save(itensCompraModel));
    }
}




