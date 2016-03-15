/*

The following program takes high level commands from serial input from an external source
(Raspberry Pi), and converts them to DCC signals which are sent out to a track.

author: Cailean MacIllFhinnein

date: 02.03.16

Note: This code was rewritten on the date stated above. An earlier version was written at 
an earlier but was lost.

Aside from imported libraries, this code is my own work.
*/

//Libraries taken from RailStars
#include <DCCPacket.h>
#include <DCCPacketQueue.h>
#include <DCCPacketScheduler.h>

DCCPacketScheduler scheduler;

String input;
boolean StringComplete;
String command;
int address;
int data;

void setup() {
  String input;
  
  StringComplete = false;
  
  Serial.begin(9600);
  
  scheduler.setup();

  //for testing only
  //pinMode(13, OUTPUT);
  //digitalWrite(13, LOW);
}

void loop() {
  
  if (StringComplete) {

    //digitalWrite(13, HIGH);

    Serial.println(command);

    Serial.println(address);

    Serial.println(data);

    //carry out command
    Command();
    
    input = "";
    
    StringComplete = false;
    
  }
  
  scheduler.update();
}

//get input from Pi
void serialEvent() {

  while (Serial.available()) {
    char in = (char)Serial.read();
    
    input += in;

    Serial.println(input);
    
    if (in == '\n') {
    StringComplete = true;
    }
  }

  //parse data
  
  command = input.substring(0, 4);
  
  address = input.substring(5, 7).toInt();
  
  data = input.substring(8, 10).toInt();
}

void Command() {
  //Serial output there for testing purposes

  //set direction
  if (command == "forw") {
    scheduler.opsProgramCV(address, DCC_SHORT_ADDRESS, 29, 6);
    Serial.println("forward");
  }
  else if (command == "back") {
    scheduler.opsProgramCV(address, DCC_SHORT_ADDRESS, 29, 7);
    Serial.println("reverse");
  }
  //set speed
  else if (command == "spee") {
    if (scheduler.setSpeed128(address, DCC_SHORT_ADDRESS, data)) {
      Serial.println("Speed changed");

      //for testing
      //digitalWrite(13, HIGH);
    }
  }
  //set acceleration
  else if (command == "acce") {
    if (scheduler.opsProgramCV(address, DCC_SHORT_ADDRESS, 3, data)) {
      Serial.println("Acceleration changed");
    }
  }
  //set deceleration
  else if (command == "dece") {
    if (scheduler.opsProgramCV(address, DCC_SHORT_ADDRESS, 4, data)) {
      Serial.println("Deceleration changed");
    }
  }
  //set functions
  //fix this
  else if (command == "func" && data >= 0 && data < 5) {
    Serial.println("functions changed");
    scheduler.setFunctions0to4(address, DCC_SHORT_ADDRESS, data);
  }
  else if (command == "func" && data >= 5 && data < 9) {
    Serial.println("functions changed");
    scheduler.setFunctions5to8(address, DCC_SHORT_ADDRESS, data);
    Serial.println("5 to 8");
  }
  else if (command == "func" && data >= 9 && data < 13) {
    Serial.println("functions changed");
    scheduler.setFunctions0to4(address, DCC_SHORT_ADDRESS, data);
    Serial.println("9 to 12");
  }
  else if (command == "addr") {
    scheduler.opsProgramCV(address, DCC_SHORT_ADDRESS, 1, data);
    Serial.println("Address set");
  }
  
  //set accessory
  else if (command == "sacc") {
    if (scheduler.setBasicAccessory(address, data)) {
      Serial.println("Accessory set");
    }
  }
  //unset accessory
  else if (command == "uacc") {
    if (scheduler.unsetBasicAccessory(address, data)) {
      Serial.println("Accessory unset");
    }
  }
  //emergency stop
  else if (command == "stop") {
    if (scheduler.eStop()) {
      Serial.println("Emergency stop");
    }
  }
  else {
    Serial.println("unknown command"); 
  }
}
