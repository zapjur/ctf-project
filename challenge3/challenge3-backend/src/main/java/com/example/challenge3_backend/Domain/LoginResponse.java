package com.example.challenge3_backend.Domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class LoginResponse {
    private LoginStatus loginStatus;
    private UserType userType;
}
