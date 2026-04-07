package com.springapp.contestbuddy.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.contestbuddy.entity.ActivePlatforms;
import com.springapp.contestbuddy.entity.Platform;
import com.springapp.contestbuddy.entity.User;
import com.springapp.contestbuddy.repository.ActivePlatformsRepository;
import com.springapp.contestbuddy.repository.PlatformRepository;
import com.springapp.contestbuddy.repository.UserRepository;

@Service
public class PreferenceService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ActivePlatformsRepository activePlatformsRepository;

    @Autowired
    private PlatformRepository platformRepository;



    public User saveUser(User user){
        return userRepository.save(user);
    }

    public List<Platform> getAllPlatforms(){
        return platformRepository.findAll();
    }

    public void savePreferences(User user){
        List<Platform> platforms = platformRepository.findAll();
        for (Platform platform : platforms){
            ActivePlatforms activePlatforms = new ActivePlatforms(user.getId(), platform.getId(), false);
            activePlatformsRepository.save(activePlatforms);
        }
    }


    public void updatePreferences(Map<String, Boolean> preferences, User user){
        for (Map.Entry<String, Boolean> entry : preferences.entrySet()){
            String platformName = entry.getKey();
            Boolean isActive = entry.getValue();

            Platform platform = platformRepository.findByPlatformName(platformName);

            ActivePlatforms activePlatform = activePlatformsRepository.findByUserIdAndPlatformId(user.getId(), platform.getId());
            if (activePlatform != null) {
                activePlatform.setActiveOrNot(isActive);
                activePlatformsRepository.save(activePlatform);
            }
        }
    }

    // public x updatePreferences(String preferences, Long userId){
    //     User user = userRepository.findById(userId).orElse(null);
    //     if(user != null){
            
    //         return x;
    //     }
    //     return null;
    // }

}