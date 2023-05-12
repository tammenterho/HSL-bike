package com.hslbike.hslbike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/trips")
public class BikeRentController {
	@Autowired
	private BikeRentService bservice;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public ResponseEntity<List<BikeRent>> allTrips() {
		return new ResponseEntity<List<BikeRent>>( bservice.getAllTrips(), HttpStatus.OK);
		
	}

}