package com.example.Nike_mall.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "shoes_info")
public class shoesInfo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int shsId;

    @Column(name = "shs_category")
    private String shsCategory;

    @Column(name = "shs_name")
    private String shsName;

    @Column(name = "shs_size")
    private String shsSize;

    @Column(name = "shs_amt")
    private int shsAmt;

    @Column(name = "shs_color")
    private String shsColor;
}
