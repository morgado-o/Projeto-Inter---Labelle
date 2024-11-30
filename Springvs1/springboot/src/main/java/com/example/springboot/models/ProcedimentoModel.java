package com.example.springboot.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Entity
    @Table (name = "Procedimentos")
    public class ProcedimentoModel implements Serializable {
        private static final long serialVersionUID = 1L;

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idProcedimento;
        private String descricao;
        private Double valorSessao;

        @Column(columnDefinition = "TIME")
        @JsonFormat (pattern = "HH:mm")
        private LocalTime tempoMinimo;

    @OneToMany(mappedBy = "procedimento")
    private List<ItensCompraModel> itens;

    public Long getIdProcedimento() {
        return idProcedimento;
    }

    public void setIdProcedimento(Long idProcedimento) {
        this.idProcedimento = idProcedimento;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getValorSessao() {
        return valorSessao;
    }

    public void setValorSessao(Double valorSessao) {
        this.valorSessao = valorSessao;
    }

    public LocalTime getTempoMinimo() {
        return tempoMinimo;
    }

    public void setTempoMinimo(LocalTime tempoMinimo) {
        this.tempoMinimo = tempoMinimo;
    }
}