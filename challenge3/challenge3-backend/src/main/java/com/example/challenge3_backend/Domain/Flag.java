package com.example.challenge3_backend.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@AllArgsConstructor
@Data
public class Flag {
    private LocalDateTime time;
    private String task;
    private String message;
}
