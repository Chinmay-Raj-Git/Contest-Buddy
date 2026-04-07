package com.springapp.contestbuddy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springapp.contestbuddy.entity.ActivePlatforms;

@Repository
public interface ActivePlatformsRepository extends JpaRepository<ActivePlatforms, Long>{
    public ActivePlatforms findByUserIdAndPlatformId(Long userId, Long platformId);
}