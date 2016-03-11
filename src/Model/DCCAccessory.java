package Model;

public class DCCAccessory implements DCCDecoder{
	
	int address;
	int capacity;
	String name;
	boolean set[];
	
	public DCCAccessory(int Address, String Name, int cap) {
		address = Address;
		name = Name;
		capacity = cap;
		set = new boolean[capacity];
		for (int i = 0; i < capacity; i++) {
			set[i] = false;
		}
	}
	
	public int getAddress() {
		return address;
	}

	public void setAddress(int Address) {
		address = Address;
	}
	
	public void doFunction(int number, boolean setting) {
		if (number > capacity - 1) {
			System.out.println("no such function");
		}
		else {
			set[number] = setting;
		}
	}

	public boolean getFunction(int number) {
		return set[number];
	}

	public int getCapacity() {
		return capacity;
	}

	public String getName() {
		return name;
	}

}
