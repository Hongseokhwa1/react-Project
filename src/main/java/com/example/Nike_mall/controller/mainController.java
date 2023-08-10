package com.example.Nike_mall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nike_mall.domain.shoesInfo;
import com.example.Nike_mall.repository.ShoesRepository;

@RestController
public class mainController {

    @Autowired
    private ShoesRepository shoesRepository;
    
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public List<shoesInfo> shoesList() {
        System.out.println("shoesList 입니다.");
        return shoesRepository.findAll();
    }

    @RequestMapping(value = "/shoesDetail", method = RequestMethod.GET)
    public shoesInfo shoesDetail(int id) {
        return shoesRepository.findById(id);
    }
}
