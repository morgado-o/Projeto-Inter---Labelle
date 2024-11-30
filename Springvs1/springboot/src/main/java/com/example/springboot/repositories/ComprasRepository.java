package com.example.springboot.repositories;
import com.example.springboot.models.ComprasModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComprasRepository extends JpaRepository <ComprasModel, Long> {
}
