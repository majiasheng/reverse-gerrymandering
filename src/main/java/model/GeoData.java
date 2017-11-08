package model;

import java.util.ArrayList;
import java.util.Collection;

public class GeoData {
	
	private Collection<Coordinate>	coordinates;	// district boundary coordinates
	private double					area;
	private int 					year;
	
	public GeoData() {
		coordinates = new ArrayList<Coordinate>();
	}

	public Collection<Coordinate> getCoordinates() {
		return coordinates;
	}

	public void setCoordinates(ArrayList<Coordinate> coordinates) {
		this.coordinates = coordinates;
	}

	public double getArea() {
		return area;
	}

	public void setArea(double area) {
		this.area = area;
	}
	
}
