package com.file.iml;
import java.io.File;

import java.io.InputStream;

import javax.management.RuntimeErrorException;
import javax.swing.text.html.HTML;

import org.eclipse.angus.mail.handlers.multipart_mixed;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


import ch.qos.logback.classic.Logger;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;




@Service

public class EmailServiceImpl implements com.file.email_service.EmailService {
    private Logger logger=(Logger) LoggerFactory.getLogger(EmailServiceImpl.class);
    
	private JavaMailSender mailSender;
	
//	private Logger logger=LoggerFactory.getLogger(EmailServiceImpl.class);
public EmailServiceImpl(JavaMailSender mailSender) {
		this.mailSender=mailSender;
	}
	
	@Override
	public String sendEmail(String to, String subject, String message) {
		SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
		// TODO Auto-generated method stub
		simpleMailMessage.setTo(to);
		simpleMailMessage.setSubject(subject);
		simpleMailMessage.setText(message);
		simpleMailMessage.setFrom("ashutoshdapakara0@gmail.com");
		mailSender.send(simpleMailMessage);
		logger.info("Email has been send");
return "Message Send Successfuly";
	}

	@Override
	public String[] sendEmail(String[] to,String[] cc, String subject, String message) {
		// TODO Auto-generated method stub
		SimpleMailMessage simpleMailMessage=new SimpleMailMessage();

		simpleMailMessage.setTo(to);
		simpleMailMessage.setSubject(subject);
		simpleMailMessage.setText(message);
		simpleMailMessage.setFrom("ashutoshdapakara0@gmail.com");
		simpleMailMessage.setCc(cc);
		mailSender.send(simpleMailMessage);
		
return to;
	}



	@Override
	public void sendEmailWithFile(String to, String subject, String message, File file) {
		// TODO Auto-generated method stub

	}

}

