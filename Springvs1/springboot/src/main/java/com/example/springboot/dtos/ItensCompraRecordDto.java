package com.example.springboot.dtos;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public record ItensCompraRecordDto(
        @NotNull Long procedimento_id,
        @NotNull Long funcionario_id,
        @NotBlank Integer qtSessao,
        @NotNull Double valorTotalSessao,
        @NotNull String status,
        LocalDateTime dataAgenda) { }
