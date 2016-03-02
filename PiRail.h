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
String input
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
		
		Command();
		
		input = "";
		
		StringComplete = false;
		
	}
	
	scheduler.update();
}

void SerialEvent() {

	while (Serial.available()) {
		char in = (char)Serial.read();
		
		input += inChar;
		
		if (inChar == '\n') {
		stringComplete = true;
		}
	}
	
	command = input.substr(0, 4);
	
	address = input.substr(5, 7).toInt();
	
	data = input.substr(8, 10).toInt();
}

void Command() {
	
	if (command == "dire") {
		
	}
	else if (command == "spee") {
		
	}
	else if (command == "acce") {
		
	}
	else if (command == "dece") {
		
	}
	else if (command == "func") {
		
	}
	else if (command == "sadd") {
		
	}
	else if (command == "sacc") {
		
	}
	else if (command == "uacc") {
		
	}
	else if (command == "stop") {
		
	}
	
}