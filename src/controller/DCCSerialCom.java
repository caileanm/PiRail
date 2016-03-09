package controller;

import java.io.OutputStream;

import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;

public class DCCSerialCom {
	
	SerialPort Port;
	
	//For Raspberry Pi
	//StringPortName = "/dev/ttyACM0";
	
	//For Windows
	String PortName = "COM3";
	
	private OutputStream output;
	
	private static final int timeout = 2000;
	
	//Data rate same as Arduino
	private static final int DataRate = 9600;
	
	public void init() {
		//For Windows. Change for Raspberry Pi
		 System.setProperty("gnu.io.rxtx.SerialPorts", "COM3");
		 
		 CommPortIdentifier portId = null;
		 
	}
	
	public void send(String command) {
		
		
		
	}
}
