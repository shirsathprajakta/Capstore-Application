package com.cg.capstore.controller;

import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.cg.capstore.entities.Order;
import com.cg.capstore.entities.Address;
import com.cg.capstore.entities.CustomerDetails;
import com.cg.capstore.response.AuthRequest;
import com.cg.capstore.response.ForgotPassRequest;
import com.cg.capstore.response.UserDetails;
import com.cg.capstore.service.ICustomerService;
import com.cg.capstore.util.JwtUtil;


@RestController
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	private ICustomerService customerService;
	
	private Logger logger = Logger.getRootLogger();

	@Autowired
    private JwtUtil jwtUtil;
	
    @Autowired
    private AuthenticationManager authenticationManager;

	
	@GetMapping("/helloCust")
	public ResponseEntity<Object> checkWorking(){
		return new ResponseEntity<Object>("Hello Customer..", HttpStatus.OK);
	}
	
	@PostMapping(value = "/addUser")
	public String createNewUser(@RequestBody UserDetails user) throws Exception
	{
		logger.info("In CutomerController at function createNewUSer");
		return customerService.createNewUser(user);
		
	}
	
	@GetMapping("/countOfCustomers")
	public ResponseEntity<Long> countOfCustomers() throws Exception{
		logger.info("In CutomerController at function countOfCustomers");
		return new ResponseEntity<Long>(customerService.countOfCustomers(), HttpStatus.OK);
	}
	

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
    	logger.info("In CutomerController at function generateToken");
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            return "Invalid";
        }
        return jwtUtil.generateToken(authRequest.getUserName());
    }
    
    @GetMapping("/changePassword/{oldPassword}/{newPassword}")
	public ResponseEntity<Boolean> checkPassword(HttpServletRequest request,
			@PathVariable("oldPassword") String oldPassword, @PathVariable("newPassword") String newPassword) throws Exception {
    	logger.info("In CutomerController at function changePassword");
    	final String token = request.getHeader("Authorization");			
		final String username = jwtUtil.extractUsername(token.substring(7));
		return new ResponseEntity<Boolean>(customerService.changePassword(username, oldPassword, newPassword),
				HttpStatus.OK);

	}


    @PostMapping(value = "/forgotPassword")
	public String forgotPassword(@RequestBody ForgotPassRequest forgotpPassRequest) throws Exception {
    	logger.info("In CutomerController at function forgotPassword");
		return customerService.forgotPassword(forgotpPassRequest.getUsername(), forgotpPassRequest.getSecurityQuestion(), forgotpPassRequest.getSecurityAnswer());
	}

	@GetMapping("/myorders")
	public ResponseEntity<Set<Order>> getOrders(HttpServletRequest request) throws Exception{
		logger.info("In CutomerController at function getOrders");
		final String token = request.getHeader("Authorization");			
		final String username = jwtUtil.extractUsername(token.substring(7));
		return new ResponseEntity<Set<Order>>(customerService.getOrders(username), HttpStatus.OK);
	}
	
	@GetMapping("/updateStatus/{orderId}/{status}")
	public ResponseEntity<Boolean> updateStatus(HttpServletRequest request,@PathVariable("orderId")Integer orderId,@PathVariable("status")String status) throws Exception{
		logger.info("In CutomerController at function updateStatus");
		final String token = request.getHeader("Authorization");			
		final String username = jwtUtil.extractUsername(token.substring(7));
		return new ResponseEntity<Boolean>(customerService.updateStatus(username,orderId,status), HttpStatus.OK);
	}
	
	@GetMapping("/getStatus/{orderId}")
	public ResponseEntity<String> getStatus(HttpServletRequest request,@PathVariable("orderId")Integer orderId) throws Exception{
		logger.info("In CutomerController at function getStatus");
		final String token = request.getHeader("Authorization");			
		final String username = jwtUtil.extractUsername(token.substring(7));
		return new ResponseEntity<String>(customerService.getStatus(username,orderId), HttpStatus.OK);
	}
	
	
		@GetMapping("/viewAddress") 
		public List<Address> viewAddress(HttpServletRequest request)// for viewing all the addresses saved by a particular customer
		{
			logger.info("In CutomerController at function viewAddress");
			final String token = request.getHeader("Authorization");			
			final String username = jwtUtil.extractUsername(token.substring(7));
			return customerService.viewAddress(username);
		}
		
		@GetMapping("/deleteAddress/{addressId}") 
		public boolean deleteAddress(@PathVariable Integer addressId)// for deleting address from customer end
		{
			logger.info("In CutomerController at function deleteAddress");
			return customerService.deleteAddress(addressId);
		}
		
		@PostMapping("/addAddress")
		public boolean addAddress(@RequestBody Address add,HttpServletRequest request) // for adding address by customer
		{
			logger.info("In CutomerController at function addAddress");
			final String token = request.getHeader("Authorization");			
			final String username = jwtUtil.extractUsername(token.substring(7));
			return customerService.addAddress(add,username);
		}

		
		@GetMapping(value="/getUserDetails")
		public ResponseEntity<CustomerDetails> getUserDetails(HttpServletRequest request)
		{
			logger.info("In CutomerController at function getUserDetails");
			final String token = request.getHeader("Authorization");			
			final String username = jwtUtil.extractUsername(token.substring(7));
			return new ResponseEntity<CustomerDetails>(customerService.getUserDetails(username),HttpStatus.OK);
		}
		
		
		@PutMapping	(value="/editUser")
		public String editUser(@RequestBody CustomerDetails customer)
		{
			logger.info("In CutomerController at function editUser");
			return customerService.editUser(customer);
		}
}

