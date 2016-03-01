package Model;

import java.util.List;

public interface CBUSModule {
	
	public int getOutputs();
	
	public int getAddress();
	
	public void program(int event, int value);
	
	//public List<int> getValues(int event);
}
