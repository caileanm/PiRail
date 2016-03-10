package Main;

import java.io.IOException;

import gnu.io.NoSuchPortException;
import gnu.io.PortInUseException;
import gnu.io.UnsupportedCommOperationException;
import controller.MasterController;

public class PiRail {
	
	public static void main(String[] args) throws NoSuchPortException, PortInUseException, UnsupportedCommOperationException, IOException {
		
		MasterController MC = new MasterController();
	}
	
}
