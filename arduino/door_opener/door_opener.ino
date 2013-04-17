/*
example.pde - Example arduino implementation of the lakrits communication protocol.

For the latest source and documentation, visit:
https://github.com/jpettersson/lakrits

Copyright 2011 Jonathan A Pettersson  
You may use this software under the terms of the MIT License.
*/

#include <Lakrits.h>;

//A unique 2 byte integer as an identifier.
int id = 2;
int TYPE_RESULT = 10;
int RELAY_PIN_0 = 4;

//Instantiate the lakrits object and pass it the unique id.
Lakrits lk = Lakrits(id);

void setup() {
  Serial.begin(9600);
  //Use the Serial class for communication.
  lk.setPrinter(Serial);
  
  pinMode(RELAY_PIN_0, OUTPUT);

  //Set a callback for when new messages arrive. 
  lk.setOnMessageListener(onMessage);
}

void onMessage(int type, byte* data, byte length) {
  //A message was recieved
  digitalWrite(RELAY_PIN_0, HIGH);    
  //delay(1000);
  delay(data[0] * 100);
  digitalWrite(RELAY_PIN_0, LOW);  

  byte result[1] = {1};
  lk.sendMessage(TYPE_RESULT, result, 1);
}

//In order for lakrits to properly process incoming data it might need a full clock cycle. 
//Only perform other tasks when processIO is false, this will ensure that lakrits has enough time to complete.
void loop() {
  if(!lk.processIO()) {
    //Liquorice is not doing work on this cycle, do something else.
  }
}
