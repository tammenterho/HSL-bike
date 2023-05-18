package com.hslbike.hslbike;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StationsService {
	   @Autowired
	    private StationsRepository sRepository;

	    public List<Stations> getAllStations() {
	        return sRepository.findAll();
	    }

	    public List<Stations> getValidStationsPaginated(int page, int limit) {
	        Pageable pageable = PageRequest.of(page, limit);
	        Page<Stations> pageResult = sRepository.findAll(pageable);
	        List<Stations> stations = pageResult.getContent();

	        List<Stations> validStations = new ArrayList<>();
	        for (Stations station : stations) {
	            if (isValidStation(station)) {
	                validStations.add(station);
	            }
	        }

	        return validStations;
	    }

	    private boolean isValidStation(Stations station) {
	        // Tarkista aseman voimassaoloehdot täällä
	        // Voit muokata ehtoja tarpeen mukaan

	        return true; // Palauta true oletuksena, jos et tarkista aseman voimassaoloa
	    }
	

}
