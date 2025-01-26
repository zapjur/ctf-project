package com.example.challenge3_backend.Domain;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UserTest {

    @Test
    void shouldCreateValidUserFromDto(){
        UserDto dto = new UserDto("test@gmail.com", "password");
        User created = User.from(dto);
        assertThat(created).
                extracting(User::getEmail, User::getPassword, User::getUserType)
                .containsExactly("test@gmail.com", "password", UserType.USER);
    }
    @Test
    void shouldCreateValidAdmin(){
        AdminDto dto = new AdminDto("test@gmail.com", "password", "token");
        User created = User.from(dto);
        assertThat(created).
                extracting(User::getEmail, User::getPassword, User::getUserType)
                .containsExactly("test@gmail.com", "password", UserType.ADMIN);
    }
}