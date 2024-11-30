package com.example.springboot.controllers;
import com.example.springboot.dtos.ClienteRecordDto;
import com.example.springboot.dtos.ProcedimentoRecordDto;
import com.example.springboot.models.ClienteModel;
import com.example.springboot.models.ProcedimentoModel;
import com.example.springboot.repositories.ProcedimentoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
@RestController
public class ProcedimentoController {

    @Autowired
    ProcedimentoRepository procedimentoRepository;

    @PostMapping("/procedimento")
    public ResponseEntity<ProcedimentoModel> saveProcedimento(@RequestBody @Valid ProcedimentoRecordDto procedimentoRecordDto) {
        var procedimentoModel = new ProcedimentoModel();
        BeanUtils.copyProperties(procedimentoRecordDto, procedimentoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(procedimentoRepository.save(procedimentoModel));
    }

    @GetMapping("/procedimento")
    public ResponseEntity<List<ProcedimentoModel>> getAllProcedimento() {
        return ResponseEntity.status(HttpStatus.OK).body(procedimentoRepository.findAll());
    }

    @GetMapping("/procedimento/{id}")
    public ResponseEntity<Object> getOneProcedimento(@PathVariable(value = "id") Long id) {
        Optional<ProcedimentoModel> procedimento0 = procedimentoRepository.findById(id);
        if (procedimento0.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Procedimento não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(procedimento0.get());
    }

    @PutMapping("/procedimento/{id}")
    public ResponseEntity<Object> updateProcedimento(@PathVariable(value = "id") String idStr,
                                                     @RequestBody @Valid() ProcedimentoRecordDto procedimentoRecordDto) {
        Long id;
        try {
            // Tenta converter o ID para Long
            id = Long.parseLong(idStr);
        } catch (NumberFormatException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID inválido, não é possível converter para Long.");
        }

        Optional<ProcedimentoModel> procedimento0 = procedimentoRepository.findById(id);
        if (procedimento0.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Procedimento não encontrado!");
        }
        var procedimentoModel = procedimento0.get();
        BeanUtils.copyProperties(procedimentoRecordDto, procedimentoModel);
        return ResponseEntity.status(HttpStatus.OK).body(procedimentoRepository.save(procedimentoModel));
    }

    @DeleteMapping("/procedimento/{id}")
    public ResponseEntity<Object> deleteProcedimento(@PathVariable(value = "id") String idStr) {
        Long id;
        try {
            // Tenta converter o ID para Long
            id = Long.parseLong(idStr);
        } catch (NumberFormatException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID inválido, não é possível converter para Long.");
        }

        Optional<ProcedimentoModel> procedimento0 = procedimentoRepository.findById(id);
        if (procedimento0.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Procedimento não encontrado!");
        }
        procedimentoRepository.delete(procedimento0.get());
        return ResponseEntity.status(HttpStatus.OK).body("PROCEDIMENTO DELETADO COM SUCESSO!");
    }
}
