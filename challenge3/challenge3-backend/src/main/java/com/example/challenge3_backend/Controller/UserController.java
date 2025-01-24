package com.example.challenge3_backend.Controller;

import com.example.challenge3_backend.Domain.*;
import com.example.challenge3_backend.Service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/create/default")
    public ResponseEntity<User> createDefaultUser(
            @Valid
            @RequestBody
            UserDto userDto
    ){
        return new ResponseEntity<>(userService.createUser(userDto), HttpStatus.CREATED);
    }

    @PostMapping("/create/admin")
    public ResponseEntity<User> createAdminUser(
            @Valid
            @RequestBody
            AdminDto adminDto
    ){
        return new ResponseEntity<>(userService.createAdmin(adminDto), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid
            @RequestBody
            LoginDto loginDto
    ){
        return ResponseEntity.ok(userService.login(loginDto));
    }
}
