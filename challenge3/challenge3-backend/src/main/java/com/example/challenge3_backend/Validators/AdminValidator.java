package com.example.challenge3_backend.Validators;

import com.example.challenge3_backend.Dao.UserDao;
import com.example.challenge3_backend.Domain.User;
import com.example.challenge3_backend.Domain.UserType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminValidator {
    private final UserDao userDao;

    public boolean validateByToken(String adminToken){
        return adminToken.equals("admin@_123456_@token");
    }

    public boolean validateByEmail(String email){
        User user = userDao.findByEmail(email);
        return user.getUserType() == UserType.ADMIN;
    }
}
