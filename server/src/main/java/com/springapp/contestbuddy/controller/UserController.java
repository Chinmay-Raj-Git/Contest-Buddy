package com.springapp.contestbuddy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.contestbuddy.entity.User;
import com.springapp.contestbuddy.service.UserService;
import com.springapp.contestbuddy.service.PreferenceService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class UserController{

    @Autowired
    private UserService userService;
    @Autowired
    private PreferenceService preferenceService;

    @PostMapping("/testing")
    public String TestGet(@RequestBody String email){
        System.out.println(email);

        return email;
    }

    @PostMapping("/register")
    public User register(@RequestBody User userData){
        System.out.println(userData);
        System.out.println("Received user data: " + userData.getName() + ", " + userData.getEmail());
        User to_be_returned = userService.saveUser(userData);

        preferenceService.savePreferences(userData);

        return to_be_returned;
    }



}