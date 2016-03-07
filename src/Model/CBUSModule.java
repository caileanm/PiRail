package Model;

public interface CBUSModule {
	
	public int getOutputs();
	
	public void program(int event, int value);
	
	public boolean getState(int output);
	
	public void changeState(int output, boolean setting);
}
