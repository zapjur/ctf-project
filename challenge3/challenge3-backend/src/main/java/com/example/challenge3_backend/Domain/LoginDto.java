package com.example.challenge3_backend.Domain;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDto {

    @NotBlank(message = "email can not be blank")
    @Size(min = 7, max = 20, message = "email length should be in range 7-20")
    private String email;

    @NotBlank(message = "password can not be blank")
    @Size(min = 6, max=20, message = "password length should be in range 6-20")
    private String password;
}
