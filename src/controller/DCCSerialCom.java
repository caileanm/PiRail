package controller;

/*
 * The following class creates the connection to send DCC commands to an Arduino.
 * As DCC is one-way, there is only an output stream and no input stream.
 * 
 * Author: Cailean MacIllFhinnein
 * 
 * Date 9.3.16
 */

import java.io.OutputStream;

import gnu.io.CommPortIdentifier;
import gnu.io.NoSuchPortException;
import gnu.io.SerialPort;

public class DCCSerialCom {
	
	public void init() throws NoSuchPortException {
		CommPortIdentifier Identifier = CommPortIdentifier.getPortIdentifier("/dev/ttyACM0");
	}
	
	public void send(String command) {
		
		//output command from controller
		
	}
}
