package controller;

/*
 * The following class interfaces directly with the hardware while
 * containing the controller classes for the trains and layout.
 */

public class MasterController {
	
	trainController cab;
	LayoutController controlPanel;
	
	
	public MasterController() {
		cab = new trainController();
		controlPanel = new LayoutController();
	}
	
}
