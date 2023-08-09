package com.example.Nike_mall.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Nike_mall.domain.shoesInfo;

@Repository
public interface ShoesRepository extends JpaRepository<shoesInfo, Integer> {
    List<shoesInfo> findAll();
}
