package com.example.challenge3_backend.Service;

import com.example.challenge3_backend.Dao.UserDao;
import com.example.challenge3_backend.Domain.*;
import com.example.challenge3_backend.Validators.AdminValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final AdminValidator adminValidator;
    private final UserDao userDao;

    public User createUser(UserDto userDto) {
        return userDao.save(User.from(userDto));
    }

    public User createAdmin(AdminDto adminDto){
        boolean isValidAdmin = adminValidator.validate(adminDto.getAdminToken());
        if(isValidAdmin){
           return userDao.save(User.from(adminDto));
        }
        throw new IllegalArgumentException(
                String.format("Provided token: [%s] is not valid", adminDto.getAdminToken()));
    }

    public LoginResponse login(LoginDto loginDto){
        User found = userDao.findByEmail(loginDto.getEmail());
        if(found.getPassword().equals(loginDto.getPassword())){
            return new LoginResponse(LoginStatus.SUCCESSFUL, found.getUserType());
        }
        return new LoginResponse(LoginStatus.FAILED, found.getUserType());
    }
}
