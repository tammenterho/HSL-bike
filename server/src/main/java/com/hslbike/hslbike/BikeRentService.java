package com.hslbike.hslbike;

import java.util.ArrayList;

import java.util.List;

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

	public List<BikeRent> getValidTripsPaginated(int page, int limit) {
		Pageable pageable = PageRequest.of(page, limit);
		Page<BikeRent> pageResult = brepo.findAll(pageable);
		List<BikeRent> trips = pageResult.getContent();

		List<BikeRent> validTrips = new ArrayList<>();
		for (BikeRent trip : trips) {
			if (trip.getDuration() > 10 && trip.getCoveredDistance() > 10) {
				validTrips.add(trip);
			}
		}

		return validTrips;
	}

	public List<BikeRent> searchBikeRentsPaginated(String searchTerm, int offset, int limit) {
		List<BikeRent> allResults = searchBikeRents(searchTerm);
		int endIndex = Math.min(offset + limit, allResults.size());
		return allResults.subList(offset, endIndex);
	}

	public List<BikeRent> searchBikeRents(String searchTerm) {
		List<BikeRent> searchResults = new ArrayList<>();
		return searchResults;
	}

	public int countTripsWithDepartureStation(String stationName) {
		return brepo.countByDepartureStationName(stationName);
	}

	public int countTripsWithReturnStation(String stationName) {
		return brepo.countByReturnStationName(stationName);
	}
}
