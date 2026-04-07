package com.springapp.contestbuddy.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="all_platforms")
public class Platform{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String platformName;

    public Platform(){}

    public void setId(Long id){this.id = id;}
    public Long getId(){return id;}

    public void setplatformName(String platformName){this.platformName = platformName;}
    public String getplatformName(){return platformName;}

}