package com.hslbike.hslbike;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeRentRepository extends MongoRepository<BikeRent, ObjectId> {
    List<BikeRent> findByDepartureStationNameContainingIgnoreCase(String departureStationName);
    int countByDepartureStationName(String departureStationName);
    List<BikeRent> findByReturnStationNameContainingIgnoreCase(String departureStationName);
    int countByReturnStationName(String returnStationName);
}


