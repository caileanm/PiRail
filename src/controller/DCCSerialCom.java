package controller;

/*
 * The following class handles communication between the raspberry Pi and Arduino
 * over serial USB. Although only one way communication is necessary, two-way 
 * communication is used for testing and error handling.
 * 
 * author: Cailean MacIllFhinnein
 */

import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;
import gnu.io.SerialPortEvent;
import gnu.io.SerialPortEventListener;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Enumeration;

public class DCCSerialCom implements SerialPortEventListener {
    
	SerialPort serialPort = null;

    private static final String PORT = "COM3";
//        "/dev/ttyACM0", // Raspberry Pi
    
    //bufferedreader for testing only
    private BufferedReader in;
    private OutputStream out;
    
    private static final int TIMEOUT = 1000;
    private static final int BAUDRATE = 9600;

    public boolean init() {
        try {
            CommPortIdentifier portId = null;
            Enumeration portEnum = CommPortIdentifier.getPortIdentifiers();
          
            System.out.println( "Trying:");
        
            portId = (CommPortIdentifier) portEnum.nextElement();
            System.out.println( "   port" + portId.getName() );

            // Try to connect to the Arduino on this port
            serialPort = (SerialPort)portId.open("PiRail", TIMEOUT);
            System.out.println( "Connected on port" + portId.getName() );
        
            if (serialPort == null) {
                System.out.println("Could not connect to Arduino");
                return false;
            }
        
            // set port parameters
            serialPort.setSerialPortParams(BAUDRATE, SerialPort.DATABITS_8, SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);           
                           

            // add event listeners
            serialPort.addEventListener(this);
            serialPort.notifyOnDataAvailable(true);

            // Give the Arduino time to respond
            try { Thread.sleep(2000); } catch (InterruptedException ie) {}
            
            return true;
        }
        catch ( Exception e ) { 
            e.printStackTrace();
        }
        return false;
    }
    
    public void send(String command) {
        try {
            System.out.println("Sending data: " + command);
            out = serialPort.getOutputStream();
            //add new line to signify end of command
            command += "\n";
            out.write(command.getBytes());
        } 
        catch (Exception e) {
            System.err.println(e.toString());
            System.exit(0);
        }
    }

    public synchronized void close() {
        if ( serialPort != null ) {
            serialPort.removeEventListener();
            serialPort.close();
        }
    }

    // Handle serial port event for testing
    public synchronized void serialEvent(SerialPortEvent oEvent) {
        try {
            switch (oEvent.getEventType() ) {
                case SerialPortEvent.DATA_AVAILABLE: 
                    if ( in == null ) {
                        in = new BufferedReader(new InputStreamReader(serialPort.getInputStream()));
                    }
                    String input = in.readLine();
                    System.out.println(input);
                    break;
                default:
                    break;
            }
        } 
        catch (Exception e) {
            System.err.println(e.toString());
        }
    }

}