package com.hslbike.hslbike;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection = "HSLstations")
@AllArgsConstructor
@NoArgsConstructor
public class Stations {
	
	@Field("_id")
	@Id
	private String id;
	@Field("FID")
	private int FID;
	@Field("Nimi")
	private String Nimi;
	@Field("Osoite")
	private String Osoite;
	@Field("Kaupunki")
	private String Kaupunki;
	@Field("Operaattor")
	private String Operaattor;
	@Field("Kapasiteet")
	private int Kapasiteet;
	@Field("x")
	private double x;
	@Field("y")
	private double y;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getFid() {
		return FID;
	}
	public void setFid(int FID) {
		this.FID = FID;
	}
	public String getNimi() {
		return Nimi;
	}
	public void setNimi(String nimi) {
		Nimi = nimi;
	}
	public String getOsoite() {
		return Osoite;
	}
	public void setOsoite(String osoite) {
		Osoite = osoite;
	}
	public String getKaupunki() {
		return Kaupunki;
	}
	public void setKaupunki(String kaupunki) {
		Kaupunki = kaupunki;
	}
	public String getOperaattor() {
		return Operaattor;
	}
	public void setOperaattor(String operaattor) {
		Operaattor = operaattor;
	}
	public int getKapasiteet() {
		return Kapasiteet;
	}
	public void setKapasiteet(int kapasiteet) {
		Kapasiteet = kapasiteet;
	}
	public double getX() {
		return x;
	}
	public void setX(double x) {
		this.x = x;
	}
	public double getY() {
		return y;
	}
	public void setY(double y) {
		this.y = y;
	}
	
	

}
