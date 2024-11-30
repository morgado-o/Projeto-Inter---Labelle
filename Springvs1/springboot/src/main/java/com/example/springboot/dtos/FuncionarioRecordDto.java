package com.example.springboot.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.UUID;

public record FuncionarioRecordDto(
        @NotBlank String nomeFuncionario,
        @NotBlank @Size(min = 11, max = 14) String cpfFuncionario,
        @NotNull @Size(min = 11, max = 15) String contato,
        @NotNull String cargo,
        String especialidade,
        @Email String email,
        @NotNull String logradouro,
        @NotNull String bairro,
        @NotNull String cidade,
        String complemento,
        @NotNull String numero,
        @NotNull @Size(max = 9) String CEP) { }
