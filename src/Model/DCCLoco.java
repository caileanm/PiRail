package Model;

public class DCCLoco implements DCCDecoder{
	
	int address;
	int speed;
	String name;
	String image;
	boolean functions[];
	boolean forward;
	int acceleration;
	int deceleration;
	
	public DCCLoco(int Address, String Name, String file) {
		address = Address;
		name = Name;
		speed = 0;
		image = file;
		functions = new boolean[12];
		forward = true;
		acceleration = 0;
		deceleration = 0;
	}

	public int getAddress() {
		return address;
	}

	public void setAddress(int Address) {
		address = Address;
	}
	
	public void setSpeed(int Speed) {
		speed = Speed;
	}
	
	public int getSpeed() {
		return speed;
	}

	public void doFunction(int number, boolean setting) {
		functions[number] = setting;
	}

	public String getName() {
		return name;
	}
	
	public String getImage() {
		return image;
	}
	
	//another look 
	public boolean getFunction(int number) {
		if (number > 12) {
			return false;
		}
		else {
			return functions[number];
		}
	}
	
	public void setAcceleration(int Inertia) {
		acceleration = Inertia;
	}
	
	public int getAcceleration() {
		return acceleration;
	}
	
	public void setDeceleration(int Inertia) {
		deceleration = Inertia;
	}
	
	public int getDeceleration() {
		return deceleration;
	}
	
	public void setDirection(boolean direction) {
		forward = direction;
	}
	
	public boolean getDirection() {
		return forward;
	}
}
