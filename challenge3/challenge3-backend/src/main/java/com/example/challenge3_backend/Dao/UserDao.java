package com.example.challenge3_backend.Dao;

import com.example.challenge3_backend.Domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserDao extends MongoRepository<User, String> {

    User findByEmail(String email);
}
