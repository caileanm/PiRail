package controller;

public class CBUSCom {
	
	//CAN library from ...
	
	public native void loop();
	
	public CBUSCom() {
		System.loadLibrary("CBUS");
	}
	
	
	
}
