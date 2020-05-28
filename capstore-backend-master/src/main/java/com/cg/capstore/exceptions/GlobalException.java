package com.cg.capstore.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.capstore.response.ErrorMessage;

import io.jsonwebtoken.JwtException;


@RestControllerAdvice
public class GlobalException {
	
	

	@ExceptionHandler({Exception.class,JwtException.class})
	public ResponseEntity<Object> handleException(Exception exception) {
		return new ResponseEntity<Object>(new ErrorMessage(HttpStatus.BAD_REQUEST,exception.getMessage()),HttpStatus.BAD_REQUEST);
	}
	
}
