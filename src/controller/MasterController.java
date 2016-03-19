package controller;

import java.io.IOException;

import gnu.io.NoSuchPortException;
import gnu.io.PortInUseException;
import gnu.io.UnsupportedCommOperationException;

/*
 * The following class interfaces directly with the hardware while
 * containing the controller classes for the trains and layout.
 */

public class MasterController {
	
	trainController cab;
	LayoutController controlPanel;
	DCCSerialCom Arduino;
	
	public MasterController() throws NoSuchPortException, PortInUseException, UnsupportedCommOperationException, IOException {
		//Communication stuff here
		Arduino = new DCCSerialCom();
		if (Arduino.init()) {
			System.out.println("Connection established");
		}
		else {
			System.out.println("Cannot connect to Arduino");
			System.exit(0);
		}
		
		cab = new trainController(Arduino);
		controlPanel = new LayoutController(Arduino);
		
		//for testing
		cab.sendCommand("spee 44 20");
	}
	
}
