package com.example.Nike_mall.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Nike_mall.domain.shoesInfo;

public interface ShoesRepository extends JpaRepository<shoesInfo, Integer> {
    
}
