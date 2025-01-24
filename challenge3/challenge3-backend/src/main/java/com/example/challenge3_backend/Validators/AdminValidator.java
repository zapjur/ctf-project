package com.example.challenge3_backend.Validators;

import org.springframework.stereotype.Service;

@Service
public class AdminValidator {

    public boolean validate(String adminToken){
        return adminToken.equals("aaa-bbb-ccc-ddd");
    }
}
