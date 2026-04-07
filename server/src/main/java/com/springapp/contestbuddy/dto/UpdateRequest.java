package com.springapp.contestbuddy.dto;


public class UpdateRequest {
    private String platformName;
    private boolean active;

    public String getPlatformName() {
        return platformName;
    }

    public void setPlatformName(String platformName) {
        this.platformName = platformName;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}