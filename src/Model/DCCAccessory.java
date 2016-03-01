package Model;

public class DCCAccessory implements DCCDecoder{
	
	int address;
	int capacity;
	String name;
	//check whether array is needed for basic accessories
	
	public DCCAccessory(int Address, String Name, int cap) {
		address = Address;
		name = Name;
		capacity = cap;
	}
	
	public int getAddress() {
		return address;
	}

	public void setAddress(int Address) {
		address = Address;
	}
	
	//not sure if these are needed
	public void doFunction(int number, boolean setting) {
		if (number > capacity - 1) {
			System.out.println("no such function");
		}
	}

	@Override
	public boolean getFunction(int number) {
		// TODO Auto-generated method stub
		return false;
	}

}
