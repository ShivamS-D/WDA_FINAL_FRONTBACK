package com.file.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.file.dtos.LoginDTO;
import com.file.dtos.UserDTO;
import com.file.models.User;
import com.file.repositories.UserRepository;

import com.file.services.AuthService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SignupUserController {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private com.file.email_service.EmailService emailService;
    public String randomNumberStr;
	
	@Autowired
	private AuthService authService;
	@PostMapping("/")
	public  ResponseEntity<?> createUsers(@RequestBody UserDTO userDTO){
		Boolean createUser= authService.createUser(userDTO);
//		User createUser=this.userRepo.findByEmail(userDTO.getEmail());
		String emails=userDTO.getEmail();
		if(createUser==false)
			return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
		int randomNumber = generateFourDigitRandomNumber();
	         randomNumberStr = String.valueOf(randomNumber);
		emailService.sendEmail(emails,"Ashutosh" , randomNumberStr);
	   return new ResponseEntity<>(randomNumberStr, HttpStatus.CREATED);	
	   
	   
	   
	}

	
	@PostMapping("/login")
	
	public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginDto){
		String emails=loginDto.getEmail();
		ResponseEntity<?> authUser=authService.authenticateUser(loginDto);
//		if(authUser.getStatusCode().equals(400)) {
//			return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
//		}
		if(authUser.getStatusCodeValue()==400) {
			return  new ResponseEntity<>(authUser,HttpStatus.BAD_REQUEST);
		}
					emailService.sendEmail(emails, "Login","Congratulations you logged in successfully");
					  HashMap<Boolean, String> map = new HashMap<>();
					  
				        map.put(true, emails); // Example entry
				        
		
		return new ResponseEntity<>(map,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/forget/{email}")
	public ResponseEntity<?> forgetPassword(@PathVariable("email") String email) {
		User findingUser=this.userRepo.findByEmail(email);
		if(findingUser!=null) {
//			return new ResponseEntity<>(findingUser.getPassword(),HttpStatus.ACCEPTED);
			emailService.sendEmail(email, "Password", findingUser.getPassword());
			return ResponseEntity.ok().body("{\"password\": \"" + findingUser.getPassword() + "\"}");
		}
		 return ResponseEntity.badRequest().body("{\"error\": \"No user with Email\"}");
	}




	
	    
	    public  int generateFourDigitRandomNumber() {
	        return ThreadLocalRandom.current().nextInt(1000, 10000);
	    }
	
		public User userDTOtouser(UserDTO userDTO) {
			User user = new User();
			 user.setEmail(userDTO.getEmail());
			 
			   user.setName(userDTO.getName());
			   user.setPassword(userDTO.getPassword());
			   return user;
		}
		
}
