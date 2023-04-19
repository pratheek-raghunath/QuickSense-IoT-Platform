#!/usr/bin/python

import RPi.GPIO as GPIO
import paho.mqtt.client as paho
import datetime
import time
import json
import pytz
import os

IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

client = paho.Client()
client.connect(BROKER_URL, 1883)
client.loop_start()

try:

    GPIO.setmode(GPIO.BOARD)

    PIN_TRIGGER = 29
    PIN_ECHO = 31

    GPIO.setup(PIN_TRIGGER, GPIO.OUT)
    GPIO.setup(PIN_ECHO, GPIO.IN)

    GPIO.output(PIN_TRIGGER, GPIO.LOW)

    print("Waiting for sensor to settle")

    time.sleep(2)

    print("Calculating distance")
    while True:
      GPIO.output(PIN_TRIGGER, GPIO.HIGH)

      time.sleep(0.00001)

      GPIO.output(PIN_TRIGGER, GPIO.LOW)
      
      while GPIO.input(PIN_ECHO)==0:
            pulse_start_time = time.time()
      while GPIO.input(PIN_ECHO)==1:
            pulse_end_time = time.time()

      pulse_duration = pulse_end_time - pulse_start_time
      distance = round(pulse_duration * 17150, 2)
      print("Distance:",distance,"cm")
      data = {
            "sensor": "ultrasonic",
            "user_id": USER_ID,
            "data": {
                  "distance": distance,
            },
            "timestamp": str(datetime.datetime.now(IST))
          }

      print(data)
      (rc, mid) = client.publish(f'/{USER_ID}/data_stream/ultrasonic', json.dumps(data), qos=1)
      time.sleep(1)	 
finally:
      GPIO.cleanup()
