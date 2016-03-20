package controller;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

import Model.LayoutConfiguration;

public class LayoutController {
	
	LayoutConfiguration CurrentLayout;
	DCCSerialCom Arduino;
	
	LayoutController(DCCSerialCom connection) {
		Arduino = connection;
	}
	
	public void saveConfiguration() throws FileNotFoundException {
		FileOutputStream ostream = new FileOutputStream("DCCAcc.txt");
		PrintWriter pw = new PrintWriter(ostream);
		
		for (int i = 0; i < CurrentLayout.getDCCAccessories().size(); i++) {
			pw.write(CurrentLayout.getDCCAccessories().get(i).getAddress() + " " + 
					CurrentLayout.getDCCAccessories().get(i).getName() + " " + 
					CurrentLayout.getDCCAccessories().get(i).getCapacity() + "\n ");
		}
		pw.close();
	}
	
	public void loadConfiguration() throws NumberFormatException, IOException {
		FileInputStream fstream = new FileInputStream("DCCAcc.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
		String line;
		while ((line = br.readLine()) != null) {
			String tokens[] = line.split(" ");
			CurrentLayout.addDCCDecoder(Integer.parseInt(tokens[0]), tokens[1], Integer.parseInt(tokens[2]));
		}
		br.close();

		//for testing
		System.out.println("File Loaded");
	}
}
