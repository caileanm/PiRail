package controller;

/*
 * The following class creates the connection to send DCC commands to an Arduino.
 * As DCC is one-way, there is only an output stream and no input stream.
 * 
 * Author: Cailean MacIllFhinnein
 * 
 * Date 9.3.16
 */

import java.io.IOException;
import java.io.OutputStream;

import gnu.io.CommPort;
import gnu.io.CommPortIdentifier;
import gnu.io.NoSuchPortException;
import gnu.io.PortInUseException;
import gnu.io.SerialPort;
import gnu.io.UnsupportedCommOperationException;

public class DCCSerialCom {
	
	OutputStream out;
	
	public void init() throws NoSuchPortException, PortInUseException, UnsupportedCommOperationException, IOException {
		
		//The following line is for Raspberry Pi
		//CommPortIdentifier Identifier = CommPortIdentifier.getPortIdentifier("/dev/ttyACM0");
		CommPortIdentifier Identifier = CommPortIdentifier.getPortIdentifier("COM3");
		
	    CommPort commPort = Identifier.open(this.getClass().getName(), 2000);
	    
	    if( commPort instanceof SerialPort ) {
	    	SerialPort serialPort = ( SerialPort )commPort;
	    	
	    	serialPort.setSerialPortParams(9600, SerialPort.DATABITS_8, SerialPort.STOPBITS_1, SerialPort.PARITY_NONE );
	    	
	    	out = serialPort.getOutputStream();
	    }
	}
	
	public void send(String command) throws IOException {
		
		command += "\n";
		
		System.out.println(command);
		
		for (int i = 0; i < command.length(); i++) {
			out.write(command.charAt(i));
		}
		
	}
	
}
