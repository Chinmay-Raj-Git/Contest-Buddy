package com.springapp.contestbuddy.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.springapp.contestbuddy.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}