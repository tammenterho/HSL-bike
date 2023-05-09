package com.hslbike.hslbike;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BikeRentService {
	@Autowired
	private BikeRentRepository brepo;
	
	public List<BikeRent> getAllTrips() {
		return brepo.findAll();
		
	}

	public BikeRent getTripById(String id) {
	    ObjectId objectId = new ObjectId(id);
	    return brepo.findById(objectId).orElse(null);
	}
}
