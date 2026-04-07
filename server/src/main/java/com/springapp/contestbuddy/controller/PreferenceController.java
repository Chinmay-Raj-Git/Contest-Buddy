package com.springapp.contestbuddy.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.contestbuddy.dto.UpdateRequest;
import com.springapp.contestbuddy.entity.Platform;
import com.springapp.contestbuddy.entity.User;
import com.springapp.contestbuddy.service.PreferenceService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class PreferenceController{
    @Autowired
    private PreferenceService preferenceService;

    @GetMapping("/platforms")
    public List<Platform> getAllPlatforms(){
        return preferenceService.getAllPlatforms();
    }

    @PostMapping("/savePreferences")
    public void savePreferences(){
        // User user = SecurityUtils.getCurrentUser();        
        User user = new User(Long.valueOf(2), "Raj", "ychinmayraj06@gmail.com");
        preferenceService.savePreferences(user);
    }


    /*
    the request body would look like:
    {
        "LeetCode" : true, 
        "CodeForces" : true
    }
    */

    @PutMapping("/updatePreferences")
    public void updatePreferences(@RequestBody Map<String, Boolean> preferences){
        // User user = SecurityUtils.getCurrentUser();
        User user = new User(Long.valueOf(2), "Raj", "ychinmayraj06@gmail.com");
        preferenceService.updatePreferences(preferences, user);
    }

}