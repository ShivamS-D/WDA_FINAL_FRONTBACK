package com.file.email_service;
import java.io.File;

public interface EmailService {
// send email to single person
	String sendEmail(String to,String subject, String message);
	
	String[] sendEmail(String[] to, String[] cc,String subject ,String message);
	
//String sendEmailWithHtm(String to, String subject, String text);
	
	void sendEmailWithFile(String to, String subject, String message, File file);
}
