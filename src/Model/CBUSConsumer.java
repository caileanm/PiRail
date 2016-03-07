package Model;

import java.util.ArrayList;
import java.util.HashMap;

//needs some adjustments

public class CBUSConsumer implements CBUSModule{
	
	//maps events to nodes
	HashMap<Integer, ArrayList<Integer>> events;
	int capacity;
	int address;
	boolean states[];
	
	public CBUSConsumer(int cap, int node) {
		capacity = cap;
		events = new HashMap<Integer, ArrayList<Integer>>(capacity);
		address = node;
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
		if (!events.containsKey(event)) {
			events.put(event, new ArrayList<Integer>());
		}
		if (!events.get(event).contains(value)) {
			events.get(event).add(value);
		}
	}
	
	public void deprogram(int value, int event) {
		if (events.containsKey(event)) {
			events.get(event).remove(value);
			if (events.get(event).isEmpty()) {
				events.remove(event);
			}
		}
	}

	public ArrayList<Integer> getEvents(int key) {
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
