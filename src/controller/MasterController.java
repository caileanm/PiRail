package controller;

/*
 * The following class interfaces directly with the hardware while
 * containing the controller classes for the trains and layout.
 */

public class MasterController {
	
	trainController cab;
	LayoutController controlPanel;
	DCCSerialCom Arduino;
	CBUSCom CAN;
	
	public MasterController() {
		//Communication stuff here
		Arduino = new DCCSerialCom();
		Arduino.init();
		
		CAN = new CBUSCom();
		
		cab = new trainController(Arduino);
		controlPanel = new LayoutController(Arduino, CAN);
	}
	
}
