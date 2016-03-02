package Model;

import java.util.ArrayList;
import java.util.List;

public class LayoutConfiguration {
	
	List<DCCAccessory> DCCaccessories;
	List<CBUSProducer> CBUSProducers;
	List<CBUSConsumer> CBUSConsumers;
	
	public LayoutConfiguration() {
		DCCaccessories = new ArrayList<DCCAccessory>();
		CBUSProducers = new ArrayList<CBUSProducer>();
		CBUSConsumers = new ArrayList<CBUSConsumer>();
		
		//Add the command station as CBUS producer with node number 0
		CBUSProducers.add(new CBUSProducer(128, 0));
	}
	
	//DCC
	
	//does it really need a name?
	public void addDCCDecoder(int address, String name, int cap) {
		DCCaccessories.add(new DCCAccessory(address, name, cap));
	}
	
	public void RemoveDCCDecoder(int number) {
		DCCaccessories.remove(number);
	}
	
	public int getAddress(int index) {
		return DCCaccessories.get(index).getAddress();
	}
	
	public void setAddress(int index, int address) {
		DCCaccessories.get(index).setAddress(address);
	}
	
	public void DCCFunction(int index, int function, boolean setting) {
		DCCaccessories.get(index).doFunction(function, setting);
	}
	
	public boolean getDCCfunction(int index, int function) {
		return DCCaccessories.get(index).getFunction(function);
	}
	
	//CBUS
	
	public void addCBUSProducer(int cap, int node) {
		CBUSProducers.add(new CBUSProducer(cap, node));
	}
	
	public void removeCBUSProducer(int index) {
		CBUSProducers.remove(index);
	}
	
	public void addCBUSConsumer(int cap, int node) {
		CBUSProducers.add(new CBUSProducer(cap, node));
	}
	
	public void removeCBUSConsumer() {
		
	}
}
