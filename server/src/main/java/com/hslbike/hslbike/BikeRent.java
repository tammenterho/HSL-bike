package com.hslbike.hslbike;

import java.time.Duration;
import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection = "HSLtest2")
@AllArgsConstructor
@NoArgsConstructor
public class BikeRent {
	
	@Field("_id")
	@Id
	private String id;
	private LocalDateTime Departure;
	private LocalDateTime Return;
	@Field("Departure station id")
	private int departureStationId;
	@Field("Departure station name")
	private String departureStationName;
	@Field("Return station id")
	private int returnStationId;
	@Field("Return station name")
	private String returnStationName;
	@Field("Covered distance (m)")
	private int coveredDistance;
	@Field("Duration")
	private int duration;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public LocalDateTime getDeparture() {
		return Departure;
	}
	public void setDeparture(LocalDateTime departure) {
		Departure = departure;
	}
	public LocalDateTime getReturn() {
		return Return;
	}
	public void setReturn(LocalDateTime returnTime) {
		Return = returnTime;
	}
	
	public int getDepartureStationId() {
		return departureStationId;
	}
	public void setDepartureStationId(int departureStationId) {
		this.departureStationId = departureStationId;
	}
	public String getDepartureStationName() {
		return departureStationName;
	}
	public void setDepartureStationName(String departureStationName) {
		this.departureStationName = departureStationName;
	}
	public int getReturnStationId() {
		return returnStationId;
	}
	public void setReturnStationId(int returnStationId) {
		this.returnStationId = returnStationId;
	}
	public String getReturnStationName() {
		return returnStationName;
	}
	public void setReturnStationName(String returnStationName) {
		this.returnStationName = returnStationName;
	}
	public int getCoveredDistance() {
		return coveredDistance;
	}
	public void setCoveredDistance(int coveredDistance) {
		this.coveredDistance = coveredDistance;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
}
