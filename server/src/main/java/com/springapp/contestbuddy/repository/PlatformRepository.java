package com.springapp.contestbuddy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.contestbuddy.entity.Platform;

@Repository
public interface PlatformRepository extends JpaRepository<Platform, Long>{
    public Platform findByPlatformName(String platform_name);
    // get all platforms next
    @Override
    public List<Platform> findAll();
}