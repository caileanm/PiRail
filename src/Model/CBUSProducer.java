package Model;

import java.util.ArrayList;
import java.util.HashMap;

public class CBUSProducer implements CBUSModule{
	
	
	//maps inputs to events that they trigger
	HashMap<Integer, Integer> events;
	int capacity;
	int address;
	
	//keeps track of switch states
	boolean states[];
	
	public CBUSProducer(int cap, int node) {
		capacity = cap;
		events = new HashMap<Integer, Integer>(capacity);
		address = node;
		states = new boolean[capacity];
		for (int i = 0; i < capacity; i++) {
			states[i] = false;
		}
	}
	
	public int getOutputs() {
		return capacity;
	}

	public int getAddress() {
		return address;
	}

	public void program(int event, int value) {
		if (value < capacity) {
			events.put(value, event);
		}
	}
	
	public void deprogram(int value) {
		events.remove(value);
	}
	
	public int getEvent(int key) {
		return events.get(key);
	}

	public boolean getState(int output) {
		if (output < capacity) {
			return states[capacity];
		}
		else {
			return false;
		}
	}
	
	public void changeState(int output, boolean setting) {
		if (output < capacity) {
			states[output] = setting;
		}
	}
	
}
