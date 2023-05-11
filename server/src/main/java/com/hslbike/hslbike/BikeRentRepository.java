package com.hslbike.hslbike;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeRentRepository extends MongoRepository<BikeRent, ObjectId> {

}
