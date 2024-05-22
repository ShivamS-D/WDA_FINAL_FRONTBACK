package com.file.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.file.dtos.LoginDTO;
import com.file.dtos.UserDTO;
import com.file.models.User;
import com.file.repositories.UserRepository;

@Service
@Component
public interface AuthService {
	 Boolean createUser(UserDTO userDTO);
	 ResponseEntity<?> authenticateUser(LoginDTO loginDto);
	
}
