package com.example.Nike_mall.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Nike_mall.domain.shoesInfo;
import com.example.Nike_mall.repository.ShoesRepository;

@RestController
public class mainController {

    private ShoesRepository shoesRepository;
    
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public List<String> index() {
        System.out.println("index입니당");
        return Arrays.asList("안녕하세요", "index");
    }
    
    @RequestMapping(value = "/shoesList", method = RequestMethod.GET)
    public List<shoesInfo> shoesList() {
        System.out.println("shoesList 입니다.");
        return shoesRepository.findAll();
    }
}
