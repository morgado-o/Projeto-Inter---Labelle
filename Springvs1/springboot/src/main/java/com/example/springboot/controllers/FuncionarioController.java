package com.example.springboot.controllers;
import com.example.springboot.dtos.FuncionarioRecordDto;
import com.example.springboot.models.FuncionarioModel;
import com.example.springboot.models.ProcedimentoModel;
import com.example.springboot.repositories.FuncionarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class FuncionarioController {

    @Autowired
    FuncionarioRepository funcionarioRepository;

    @PostMapping("/funcionario")
    public ResponseEntity<FuncionarioModel> saveFuncionario(@RequestBody @Valid FuncionarioRecordDto funcionarioRecordDto){
        var funcionarioModel = new FuncionarioModel();
        BeanUtils.copyProperties(funcionarioRecordDto, funcionarioModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(funcionarioRepository.save(funcionarioModel));
    }
    @GetMapping("/funcionario")
    public ResponseEntity<List<FuncionarioModel>> getAllFuncionario(){
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioRepository.findAll());
    }

    @GetMapping("/funcionario/{id}")
    public ResponseEntity<Object> getOneFuncionario(@PathVariable(value="id") Long id){
        Optional<FuncionarioModel> funcionario0 = funcionarioRepository.findById(id);
        if (funcionario0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(funcionario0.get());
    }

    @PutMapping("/funcionario/{id}")
    public ResponseEntity<Object> updateFuncionario(@PathVariable(value="id") Long id,
                                                     @RequestBody @Valid() FuncionarioRecordDto funcionarioRecordDto){
        Optional<FuncionarioModel> funcionario0 = funcionarioRepository.findById(id);
        if (funcionario0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado!");
        }
        var funcionarioModel = funcionario0.get();
        BeanUtils.copyProperties(funcionarioRecordDto, funcionarioModel);
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioRepository.save(funcionarioModel));
    }

    @DeleteMapping("/funcionario/{id}")
    public ResponseEntity<Object> deleteFuncionario(@PathVariable(value = "id") Long id){
        Optional<FuncionarioModel> funcionario0 = funcionarioRepository.findById(id);
        if (funcionario0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado!");
        }
        funcionarioRepository.delete(funcionario0.get());
        return ResponseEntity.status(HttpStatus.OK).body("FUNCIONÁRIO DELETADO COM SUCESSO!");
    }

}
