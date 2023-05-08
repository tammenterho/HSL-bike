package com.hslbike.hslbike;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HslbikeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HslbikeApplication.class, args);
		
		
	}

	@GetMapping("/")
	public String apiRoot() {
		return "Hello World";
		
	}
	
}
