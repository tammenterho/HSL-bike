package com.hslbike.hslbike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/bikerents")
public class BikeRentController {
	@Autowired
	private BikeRentService bservice;

	@GetMapping
	public ResponseEntity<List<BikeRent>> allTrips() {
		return new ResponseEntity<List<BikeRent>>( bservice.getAllTrips(), HttpStatus.OK);
		
	}

}
