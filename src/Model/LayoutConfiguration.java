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
	
	public List<DCCAccessory> getDCCAccessories() {
		return DCCaccessories;
	}
	
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
	
	public void addCBUSConsumer(int cap) {
		CBUSConsumers.add(new CBUSConsumer(cap));
	}
	
	public void removeCBUSConsumer(int index) {
		CBUSConsumers.remove(index);
	}
	
	//Producers
	
	public int getProducerOutputs(int index) {
		return CBUSProducers.get(index).getOutputs();
	}
	
	public int getProducerAddress(int index) {
		return CBUSProducers.get(index).getAddress();
	}
	
	public void programProducer(int index, int event, int value) {
		CBUSProducers.get(index).program(event, value);
	}
	
	public void deprogramProducer(int index, int value) {
		CBUSProducers.get(index).deprogram(value);
	}
	
	public int getProducerEvent(int index, int key) {
		return CBUSProducers.get(index).getEvent(key);
	}
	
	public boolean getProducerState(int index, int output) {
		return CBUSProducers.get(index).getState(output);
	}
	
	public void changeProducerState(int index, int output, boolean setting) {
		CBUSProducers.get(index).changeState(output, setting);
	}
	
	//Consumers
	
	public int getConsumerOutputs(int index) {
		return CBUSConsumers.get(index).getOutputs();
	}
	
	public void programConsumer(int index, int event, int value) {
		CBUSConsumers.get(index).program(event, value);
	}
	
	public void deprogramConsumer(int index, int value, int event) {
		CBUSConsumers.get(index).deprogram(value, event);
	}
	
	public ArrayList<Integer> getConsumerEvent(int index, int key) {
		return CBUSConsumers.get(index).getEvents(key);
	}
	
	public boolean getConsumerState(int index, int output) {
		return CBUSConsumers.get(index).getState(output);
	}
	
	public void changeConsumerState(int index, int output, boolean setting) {
		CBUSConsumers.get(index).changeState(output, setting);
	}
	
}
