/*
 * The following is a simple implementation od the CAN-bus library for use with the CBUS harware n PiRail. The loops simply recieves messages
 * from the hardware or the software, and passes them to the software and the hardware respectively.
 * 
 * author: Cailean MacIllFhinnein
 * 
 * date 7/3/2016
 * 
 * Aside from external libraries, the following program is all my own work.
 */

//Library taken from (insert source here)
#include arduinoCANBUS-library-v0_3;

CAN CBUS = CAN();

void setup() {
  
  CBUS.begin(500)

}

void loop() {

  //recieve message
  if (CBUS.messageAvailable() == 1) {

    myCAN.getMessage(&myCAN.messageRx);

    //pass message on somehow
  }

  //send message
  
  
}
