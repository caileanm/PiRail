package Model;

public class DCCAccessory implements DCCDecoder{
	
	int address;
	String name;
	
	public DCCAccessory(int Address, String Name) {
		address = Address;
		name = Name;
	}
	
	public int getAddress() {
		return address;
	}

	@Override
	public void setAddress(int Address) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFunction(int number, boolean setting) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean getFunction(int number) {
		// TODO Auto-generated method stub
		return false;
	}

}
