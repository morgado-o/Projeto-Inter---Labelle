package com.example.springboot.repositories;

import com.example.springboot.models.ItensCompraModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItensCompraRepository extends JpaRepository <ItensCompraModel, Long> {
}
