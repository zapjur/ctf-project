package com.example.challenge3_backend.Controller;

import com.example.challenge3_backend.Domain.Flag;
import com.example.challenge3_backend.Validators.AdminValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class FlagController {
    private final AdminValidator adminValidator;

    @GetMapping("/flag/{email}")
    public ResponseEntity<Flag> getFlag(@PathVariable String email){
        boolean isAdmin = adminValidator.validateByEmail(email);
        if(isAdmin){
            Flag flag = new Flag(LocalDateTime.now(), "CHALLENGE 3", "You successfully captured challenge 3 flag!! Congratulations");
            return ResponseEntity.ok(flag);
        }
        else{
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }
}
