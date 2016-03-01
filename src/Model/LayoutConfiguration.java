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
		
		//Add the command station as CBUS producer
	}
	
	//does it really need a name?
	public void addDCCDecoder(int address, String name, int cap) {
		DCCaccessories.add(new DCCAccessory(address, name, cap));
	}
	
	public void RemoveDCCDecoder(int number) {
		DCCaccessories.remove(number);
	}
	
	public void addCBUSProducer() {
		
	}
	
	public void removeCBUSProducer() {
		
	}
	
	public void addCBUSConsumer() {
		
	}
	
	public void removeCBUSConsumer() {
		
	}
}
