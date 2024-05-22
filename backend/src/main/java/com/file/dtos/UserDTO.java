package com.file.dtos;

import lombok.Data;


public class UserDTO {
  private String email;
  private String password;
  private String phone;
  private String name;
  
  
  
  public String getEmail() {
	  return this.email;
  }
  
  public String getName() {
	  return this.name;
  }
  public String getPassword() {
	  return this.password;
  }

  public String getPhone() {
	  return this.phone;
  }
  
  public void setEmail(String email) {
	  this.email=email;
  }
  
  public void setPassword(String password) {
	  this.password=password;
  }
  
  public void setPhone(String phone) {
	  this.phone=phone;
  }
  public void setName(String name) {
	  this.name=name;
  }

}
