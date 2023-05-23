package com.hslbike.hslbike;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/trips")
public class BikeRentController {
	
    @Autowired
    private BikeRentService bservice;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<BikeRent>> allTrips(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int limit) {
        List<BikeRent> trips = bservice.getValidTripsPaginated(page * limit, limit);
        return new ResponseEntity<List<BikeRent>>(trips, HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/trips/search")
    public ResponseEntity<List<BikeRent>> searchBikeRents(@RequestParam String searchTerm, @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int limit) {
        List<BikeRent> searchResults = bservice.searchBikeRentsPaginated(searchTerm, page * limit, limit);
        return new ResponseEntity<>(searchResults, HttpStatus.OK);
    }
}

