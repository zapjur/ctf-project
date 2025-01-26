package com.example.challenge3_backend.Service;

import com.example.challenge3_backend.Dao.UserDao;
import com.example.challenge3_backend.Domain.*;
import com.example.challenge3_backend.Validators.AdminValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {
    UserService userService;
    AdminValidator adminValidator;
    UserDao userDao;

    @BeforeEach
    void setup(){
        adminValidator = mock(AdminValidator.class);
        userDao = mock(UserDao.class);
        userService = new UserService(adminValidator, userDao);

        User user = new User("test@gmail.com", "password", UserType.USER);
        when(userDao.findByEmail("test@gmail.com")).thenReturn(user);
    }

    @Test
    void shouldSucceedLoginWithGoodPassword(){
        LoginDto loginDto = new LoginDto("test@gmail.com", "password");
        LoginResponse response = userService.login(loginDto);
        assertThat(response.getLoginStatus()).isEqualTo(LoginStatus.SUCCESSFUL);
        assertThat(response.getUserType()).isEqualTo(UserType.USER);
    }

    @Test
    void shouldFailLoginWithGoodPassword(){
        LoginDto loginDto = new LoginDto("test@gmail.com", "bad");
        LoginResponse response = userService.login(loginDto);
        assertThat(response.getLoginStatus()).isEqualTo(LoginStatus.FAILED);
    }

    @Test
    void shouldThrowExceptionOnInvalidToken(){
        when(adminValidator.validateByToken(any())).thenReturn(false);
        assertThatThrownBy(() -> userService.createAdmin(new AdminDto()))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void shouldSaveValidAdmin(){
        when(adminValidator.validateByToken(any())).thenReturn(true);
        userService.createAdmin(new AdminDto());
        verify(userDao, times(1)).save(User.from(new AdminDto()));
    }
}