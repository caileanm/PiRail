package controller;

import Model.LayoutConfiguration;

public class LayoutController {
	
	LayoutConfiguration CurrentLayout;
	DCCSerialCom Arduino;
	CBUSCom CBUS;
	
	LayoutController(DCCSerialCom connection, CBUSCom CAN) {
		Arduino = connection;
		CBUS = CAN;
	}
	
}
