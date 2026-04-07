package com.springapp.contestbuddy.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="active_platforms")
public class ActivePlatforms{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long userId;
    private Long platformId;
    private boolean active;

    public ActivePlatforms(){}
    public ActivePlatforms(Long userId, Long platformId, boolean active){
        this.userId = userId;
        this.platformId = platformId;
        this.active = active;
    }

    public void setId(Long id){this.id = id;}
    public Long getId(){return id;}

    public void setUserId(Long userId){this.userId = userId;}
    public Long getUserId(){return userId;}

    public void setPlatformId(Long platformId){this.platformId = platformId;}
    public Long getPlatformId(){return platformId;}

    public boolean getActiveOrNot(){ return this.active; }
    public void setActiveOrNot(boolean active){ this.active = active; }
}