package controller;

import Model.StockConfiguration;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class trainController {
	
	StockConfiguration currentTrains;
	DCCSerialCom Arduino;
	
	public trainController(DCCSerialCom connection) {
		currentTrains = new StockConfiguration();
		Arduino = connection;
	}
	
	public void saveConfiguration() throws IOException {
		FileOutputStream ostream = new FileOutputStream("locos.txt");
		PrintWriter pw = new PrintWriter(ostream);
		for (int i = 0; i < currentTrains.getLocos().size(); i++) {
			pw.write(currentTrains.getLocos().get(i).getAddress() + " " + 
					currentTrains.getLocos().get(i).getName() + " " + 
					currentTrains.getLocos().get(i).getImage() + "\n");
		}
		pw.close();
		
		//for testing
		System.out.println("File Saved");
	}
	
	public void loadConfiguration() throws NumberFormatException, IOException {
		FileInputStream fstream = new FileInputStream("locos.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
		String line;
		while ((line = br.readLine()) != null) {
			String tokens[] = line.split(" ");
			currentTrains.addLoco(Integer.parseInt(tokens[0]), tokens[1], tokens[2]);
		}
		br.close();
		
		//for testing
		System.out.println("File Loaded");
	}
	
	public void sendCommand(String command) {
		try {
			Arduino.send(command);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
}
