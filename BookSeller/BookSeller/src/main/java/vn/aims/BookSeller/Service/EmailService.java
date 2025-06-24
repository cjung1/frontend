package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(String toEmail, String username) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Welcome to AIMS!");
        message.setText("Hello " + username + ",\n\nThank you for registering with AIMS system.");

        message.setFrom("your-email@gmail.com"); // same as configured in application.properties
        mailSender.send(message);
    }
}
