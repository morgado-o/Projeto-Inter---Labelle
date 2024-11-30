package com.example.springboot.dtos;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record ComprasComItensRecordDto(
        @NotNull String tipoPagamento,
        @NotNull LocalDate dtCompra,
        @NotNull Long cliente_id,
        @NotNull List<ItensCompraRecordDto> itens
) {
    public record ItensCompraRecordDto(
            @NotNull Long procedimento_id,
            @NotNull Integer qtSessao,
            @NotNull Long funcionario_id,
            @NotNull String status,
            LocalDateTime dataAgenda) { }
}
