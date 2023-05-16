package com.hslbike.hslbike;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BikeRentService {
	@Autowired
	private BikeRentRepository brepo;
	
	public List<BikeRent> getAllTrips() {
		return brepo.findAll();
		
	}

	public List<BikeRent> getTripsPaginated(int page, int limit) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<BikeRent> pageResult = brepo.findAll(pageable);
        return pageResult.getContent();
    }
}
