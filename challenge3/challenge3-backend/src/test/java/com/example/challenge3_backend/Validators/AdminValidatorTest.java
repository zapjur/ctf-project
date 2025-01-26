package com.example.challenge3_backend.Validators;

import com.example.challenge3_backend.Dao.UserDao;
import com.example.challenge3_backend.Domain.User;
import com.example.challenge3_backend.Domain.UserType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AdminValidatorTest {
    AdminValidator adminValidator;
    UserDao userDao;

    @BeforeEach
    void setup(){
        userDao = mock(UserDao.class);
        adminValidator = new AdminValidator(userDao);
    }

    @Test
    void shouldValidateByCorrectToken(){
        boolean isValid = adminValidator.validateByToken("admin@_123456_@token");
        assertThat(isValid).isTrue();
    }

    @Test
    void shouldNotValidateByIncorrectToken(){
        boolean isValid = adminValidator.validateByToken("invalid");
        assertThat(isValid).isFalse();
    }

    @Test
    void shouldValidateByAdminUser(){
        User validAdmin = new User("test@gmail.com", "password", UserType.ADMIN);
        when(userDao.findByEmail("test@gmail.com")).thenReturn(validAdmin);
        boolean isValid = adminValidator.validateByEmail("test@gmail.com");
        assertThat(isValid).isTrue();
    }

    @Test
    void shouldNotValidateByDefaultUser(){
        User validAdmin = new User("test@gmail.com", "password", UserType.USER);
        when(userDao.findByEmail("test@gmail.com")).thenReturn(validAdmin);
        boolean isValid = adminValidator.validateByEmail("test@gmail.com");
        assertThat(isValid).isFalse();
    }
}