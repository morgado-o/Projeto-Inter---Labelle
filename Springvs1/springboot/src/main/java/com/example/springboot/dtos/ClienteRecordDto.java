package com.example.springboot.dtos;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record ClienteRecordDto(
        @NotBlank String nomeCliente,
        @NotBlank @Size(min = 11, max = 14) String CPF,
        @Size(min = 8, max = 12) String RG,
        @NotNull LocalDate dataNasc,
        @NotNull @Size(min = 11, max = 15) String telefone,
        @NotNull String logradouro,
        @NotNull String bairro,
        @NotNull String cidade,
        String complemento,
        @NotNull String numero,
        @NotNull @Size(max = 9) String CEP,
        String Obs) { }




