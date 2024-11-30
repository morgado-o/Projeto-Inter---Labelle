package com.example.springboot.models;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "ItensCompra")
public class ItensCompraModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idItensCompra;
    private Integer qtSessao;
    private String status;

    @Column(name = "valor_total_sessao")
    private Double valorTotalSessao;

    @Column(columnDefinition = "DATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime dataAgenda;

    @ManyToOne
    @JoinColumn(name = "compra_id", nullable = false)
    private ComprasModel compra;

    @ManyToOne
    @JoinColumn(name = "procedimento_id", nullable = false)
    private ProcedimentoModel procedimento;

    @ManyToOne
    @JoinColumn(name = "funcionario_id", nullable = false)
    private FuncionarioModel funcionario;

    public LocalDateTime getDataAgenda() {
        return dataAgenda;
    }

    public void setDataAgenda(LocalDateTime dataAgenda) {
        this.dataAgenda = dataAgenda;
    }

    public Long getIdItensCompra() {
        return idItensCompra;
    }

    public void setIdItensCompra(Long idItensCompra) {
        this.idItensCompra = idItensCompra;
    }

    public Double getValorTotalSessao() {
        return valorTotalSessao;
    }

    public void setValorTotalSessao(Double valorTotalTotalSessao) {
        this.valorTotalSessao = valorTotalSessao;
    }

    public Integer getQtSessao() {
        return qtSessao;
    }

    public void setQtSessao(Integer qtSessao) {
        this.qtSessao = qtSessao;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ComprasModel getCompra() {
        return compra;
    }

    public void setCompra(ComprasModel compra) {
        this.compra = compra;
    }

    public ProcedimentoModel getProcedimento() {
        return procedimento;
    }

    public void setProcedimento(ProcedimentoModel procedimento) {
        this.procedimento = procedimento;
    }

    public FuncionarioModel getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(FuncionarioModel funcionario) {
        this.funcionario = funcionario;
    }
}
