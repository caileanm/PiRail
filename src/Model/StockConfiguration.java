package Model;

import java.util.ArrayList;
import java.util.List;

public class StockConfiguration {
	
	List<DCCLoco> vehicles;
	
	public StockConfiguration() {
		vehicles = new ArrayList<DCCLoco>();
	}
	
	public void addLoco(int address, String name, String file) {
		vehicles.add(new DCCLoco(address, name, file));
	}
	
	public void removeLoco(int number) {
		vehicles.remove(number);
	}
	
	public int getAddress(int number) {
		return vehicles.get(number).getAddress();
	}
	
	public String getName(int number) {
		return vehicles.get(number).getName();
	}
	
	public String getImage(int number) {
		return vehicles.get(number).getImage();
	}
	
	//maybe worth another look
	public boolean getFunction(int number, int function) {
		return vehicles.get(number).getFunction(function);
	}
	
	public int getAcceleration(int number) {
		return vehicles.get(number).getAcceleration();
	}
	
	public void setAcceleration(int number, int acceleration) {
		vehicles.get(number).setAcceleration(acceleration);
	}
	
	public int getDeceleration(int number) {
		return vehicles.get(number).getDeceleration();
	}
	
	public void setDeceleration(int number, int deceleration) {
		vehicles.get(number).setAcceleration(deceleration);
	}
	
	public List<DCCLoco> getLocos() {
		return vehicles;
	}
	
	//some sorting stuff maybe
}