package controller;

/*
 * The following class sets up and handles communication between the java program and
 * the CAN hardware, via the accompanying Arduino CBUS library. Rather than creating
 * a conventional Arduino program, the java program interfaces directly with the library
 * functions.
 */

public class CBUSCom {
	
	//CAN library from Cooking Hacks
	//deal with pointers
	public native boolean begin(int speed);
	public native char getMessage();
	public native char sendMessage();
	
	
	public CBUSCom() {
		System.loadLibrary("arduinoCAN");
	}
	
	
	
}
