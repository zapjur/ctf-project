package com.example.challenge3_backend.Domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String id;

    @NotNull
    @NotEmpty
    private String email;

    @NotNull
    @NotEmpty
    private String password;

    private UserType userType;

    @JsonIgnore
    public User(String email, String password, UserType userType){
        this.email = email;
        this.password = password;
        this.userType = userType;
    }

    @JsonIgnore
    public static User from(UserDto userDto){
        return new User(
                userDto.getEmail(),
                userDto.getPassword(),
                UserType.USER
        );
    }

    @JsonIgnore
    public static User from(AdminDto adminDto){
        return new User(
                adminDto.getEmail(),
                adminDto.getPassword(),
                UserType.ADMIN
        );
    }
}
