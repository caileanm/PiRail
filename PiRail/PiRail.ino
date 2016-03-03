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
}

void loop() {
  
  if (StringComplete) {

    Serial.println(command);

    Serial.println(address);

    Serial.println(data);
    
    Command();
    
    input = "";
    
    StringComplete = false;
    
  }
  
  scheduler.update();
}

void serialEvent() {

  while (Serial.available()) {
    char in = (char)Serial.read();
    
    input += in;
    
    if (in == '\n') {
    StringComplete = true;
    }
  }
  
  command = input.substring(0, 4);
  
  address = input.substring(5, 7).toInt();
  
  data = input.substring(8, 10).toInt();
}

void Command() {
  //Serial output there for testing purposes
  
  if (command == "dire") {
    Serial.println("direction changed");
  }
  else if (command == "spee") {
    if (scheduler.setSpeed128(address, DCC_SHORT_ADDRESS, data)) {
      Serial.println("Speed changed");
    }
  }
  else if (command == "acce") {
    Serial.println("Acceleration changed");
  }
  else if (command == "dece") {
    Serial.println("Deceleration changed");
  }
  else if (command == "func") {
    Serial.println("function changed");
  }
  else if (command == "sadd") {
    Serial.println("Address set");
  }
  else if (command == "sacc") {
    
    Serial.println("Accessory set");
  }
  else if (command == "uacc") {
    Serial.println("Accessory unset");
  }
  else if (command == "stop") {
    if (scheduler.eStop()) {
      Serial.println("Emergency stop");
    }
  }
  
}
