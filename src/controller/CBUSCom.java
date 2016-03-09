package controller;

public class CBUSCom {
	
	public native void loop();
	
	public CBUSCom() {
		System.loadLibrary("CBUS");
	}
	
	
	
}
