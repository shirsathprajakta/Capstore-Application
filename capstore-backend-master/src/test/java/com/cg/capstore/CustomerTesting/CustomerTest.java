package com.cg.capstore.CustomerTesting;

import static org.junit.jupiter.api.Assertions.*;

import org.apache.log4j.Logger;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import com.cg.capstore.controller.CustomerController;
import com.cg.capstore.entities.CustomerDetails;
import com.cg.capstore.response.AuthRequest;
import com.cg.capstore.response.UserDetails;
import com.cg.capstore.service.CustomerServiceImpl;

@Transactional
@SpringBootTest
class CustomerTest {

private static Logger logger;
	
	CustomerController controller = new CustomerController();

	@Autowired
	private CustomerServiceImpl customerService;

	@BeforeAll
	static void setUpBeforeClass() {
		logger = Logger.getRootLogger();
		System.out.println("Fetching resources for testing ...");
	}

	@BeforeEach
	void setup() throws Exception {
		logger.info("Test Case Started");
		customerService.createNewUser(new UserDetails("virat@gmail.com","Virat Kohli","Virat@123", "9876543212", "8907654345", 
				"virat12@gmail.com", "Male", "Who was your childhood hero? ", "Sachin", "Customer"));
		System.out.println("Test Case Started");
	}

	@AfterEach
	void tearDown() {
		logger.info("Test Case Over");
		System.out.println("Test Case Over");
	}

	@Test
	@DisplayName("User Registration Successful")
	@Rollback(true)
	public void registrationFirstTest() throws Exception {
		logger.info("Test Case - User Registration Successful");
		String message = customerService.createNewUser(new UserDetails("virat1@gmail.com","Virat Kohli","Virat@123",
				"9876543212", "8907654345", "virat12@gmail.com", "Male", "Who was your childhood hero? ", "Sachin", "ROLE_CUSTOMER"));
		String expectedMessage = "Virat Kohli is registered successfully!..";
		assertEquals(message, expectedMessage);
	}
	
	@Test
	@DisplayName("User Registration Fails - User Already Exist")
	@Rollback(true)
	public void registrationSecondTest() throws Exception {
		logger.info("Test Case - User Registration Fails");
		String message = customerService.createNewUser(new UserDetails("virat@gmail.com","Virat Kohli","Virat@123",
				"9876543212", "8907654345", "virat12@gmail.com", "Male", "Who was your childhood hero? ", "Sachin", "ROLE_CUSTOMER"));
		String expectedMessage = "User Already Exists.Try Login/forgot password...";
		assertEquals(message, expectedMessage);
	}

//	@Test
//	@DisplayName("User Login Successful")
//	@Rollback(true)
//	public void loginFirstTest() throws Exception {
//		logger.info("Test Case - User Login Successful");
//		AuthRequest authRequest = new AuthRequest();
//		authRequest.setUserName("virat@gmail.com");
//		authRequest.setPassword("Virat@123");
//		String actual = controller.generateToken(authRequest);
//		assertNotEquals("Invalid", actual);
//	}
	
	@Test
	@DisplayName("User Login Fails - Invalid Credentials")
	@Rollback(true)
	public void loginSecondTest() throws Exception {
		logger.info("Test Case - User Login Fails - Invalid Credentials");
		AuthRequest authRequest = new AuthRequest();
		authRequest.setUserName("virat@gmail.com");
		authRequest.setPassword("Virat@12345");
		String actual = controller.generateToken(authRequest);
	
		assertEquals("Invalid", actual);
	}
	
	@Test
	@DisplayName("Change Password Successfull")
	@Rollback(true)
	public void changePasswordFirstTest() throws Exception {
		logger.info("Test Case - Change Password Successfull");
		boolean message = customerService.changePassword("virat@gmail.com", "Virat@123", "Virat@12345");
		boolean expectedMessage = true;
		assertEquals(message, expectedMessage);
	}
	
	@Test
	@DisplayName("Change Password Unsuccessfull - Current Password is Wrong")
	@Rollback(true)
	public void changePasswordSecondTest() throws Exception {
		logger.info("Test Case - Change Password Unsuccessfull - Current Password is Wrong");
		boolean message = customerService.changePassword("virat@gmail.com", "Virat@1234", "Rohit@12345");
		boolean expectedMessage = false;
		assertEquals(message, expectedMessage);
	}
	
	@Test
	@DisplayName("Forgot Password Successfull")
	@Rollback(true)
	public void forgotPasswordFirstTest() throws Exception {
		logger.info("Test Case - Forgot Password Successfull");
		String message = customerService.forgotPassword("virat@gmail.com", "Who was your childhood hero? ", "Sachin");
		String unexpected = "invalid";
		assertNotEquals(unexpected, message);
	}
	
	@Test
	@DisplayName("Forgot Password Fails - Incorrect security/password")
	@Rollback(true)
	public void forgotPasswordSecondTest() throws Exception {
		logger.info("Forgot Password Fails - Incorrect security/password");
		String message = customerService.forgotPassword("virat@gmail.com", "Who was your childhood hero? ", "Sunil");
		String expected = "invalid";
		assertEquals(expected, message);
	}
	
	@Test
	@DisplayName("Get customer details")
	@Rollback(true)
	public void getUserDetailsTest() throws Exception {
		logger.info("Get customer details");
		CustomerDetails cust = customerService.getUserDetails("virat@gmail.com");
		assertEquals(cust.getName(), "Virat Kohli");
	}
	
	@Test
	@DisplayName("Get customer details fails")
	@Rollback(true)
	public void getUserDetailsSecondTest() throws Exception {
		logger.info("Get customer details fails");
		CustomerDetails cust = customerService.getUserDetails("virat123@gmail.com");
		assertEquals(cust, null);
	}
	
	
}
