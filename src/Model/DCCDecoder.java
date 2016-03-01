package Model;

public interface DCCDecoder {
	
	public int getAddress();
	
	public void setAddress(int Address);
	
	//maybe rethink this
	public void doFunction(int number, boolean setting);
	
	public boolean getFunction(int number);
	
}
