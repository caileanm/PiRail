package Model;

public class CBUSModule {
	
	boolean states[];
	int address;
	//events (producer or consumer or both)
	
	public CBUSModule(int connections, int Address) {
		states = new boolean[connections];
		address = Address;
	}
	
	public int getAddress() {
		return address;
	}
	
	
}
