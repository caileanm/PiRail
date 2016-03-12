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
	CBUSCom CAN;
	
	public MasterController() throws NoSuchPortException, PortInUseException, UnsupportedCommOperationException, IOException {
		//Communication stuff here
		Arduino = new DCCSerialCom();
		
		CAN = new CBUSCom();
		
		cab = new trainController(Arduino);
		controlPanel = new LayoutController(Arduino, CAN);
		
		//for testing
		cab.sendCommand("spee 44 20");
	}
	
}
