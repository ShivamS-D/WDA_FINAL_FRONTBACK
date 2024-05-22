package com.file.dtos;

import org.springframework.stereotype.Component;

@Component
public class LoginDTO {
	private   String email;
	private String password;
	
	public   String getEmail() {
		return this.email;
	}
	public String getPassword() {
		return this.password;
	}
}
