package com.example.springboot.models;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Compras")
public class ComprasModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idCompra;
    private Double valotTotal;
    private String tipoPagamento;

    @Column(columnDefinition = "DATE") // Garante que a coluna seja do tipo DATE
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dtCompra;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private ClienteModel cliente;

    @OneToMany(mappedBy = "compra")
    private List<ItensCompraModel> itens;

    public ClienteModel getCliente() {
        return cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }

    public Long getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(Long idCompra) {
        this.idCompra = idCompra;
    }

    public Double getValotTotal() {
        return valotTotal;
    }

    public void setValotTotal(Double valotTotal) {
        this.valotTotal = valotTotal;
    }

    public String getTipoPagamento() {
        return tipoPagamento;
    }

    public void setTipoPagamento(String tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }

    public LocalDate getDtCompra() {
        return dtCompra;
    }

    public void setDtCompra(LocalDate dtCompra) {
        this.dtCompra = dtCompra;
    }
}



//@OneToOne
//@JoinColumn(name = "idDetalhesEndCli", nullable = false)
//@JsonManagedReference
//private DetalhesEndModel detalhesEndModel;