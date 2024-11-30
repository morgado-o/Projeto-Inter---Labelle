package com.example.springboot.dtos;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalTime;

public record ProcedimentoRecordDto(
        @NotBlank String descricao,
        @NotNull Double valorSessao,
        @NotNull LocalTime tempoMinimo) { }

