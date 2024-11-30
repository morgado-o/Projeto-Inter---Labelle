package com.example.springboot.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ComprasRecordDto(
        @NotNull Double valorTotal,
        @NotNull String tipoPagamento,
        @NotNull LocalDate dtCompra) { }
