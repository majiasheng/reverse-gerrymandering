package model;

public class District {
	private DistrictBoundary	boundary;
	private String 				stateCode;
	private int					districtNum;
	
	public String getStateCode() {
		return stateCode;
	}
	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
	}
	public int getDistrictNum() {
		return districtNum;
	}
	public void setDistrictNum(int districtNum) {
		this.districtNum = districtNum;
	}
	public DistrictBoundary getBoundary() {
		return boundary;
	}
	public void setBoundary(DistrictBoundary boundary) {
		this.boundary = boundary;
	}
}
