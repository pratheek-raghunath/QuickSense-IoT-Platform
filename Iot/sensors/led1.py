

import RPi.GPIO as GPIO
import time 
import paho.mqtt.client as mqtt
import os
import pytz
IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

toggle = False

LED_1 = 23

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(LED_1,GPIO.OUT)

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(f"/{USER_ID}/action/led1")

def on_message(client, userdata, msg):
   global toggle
   print("Toggle led1")
   if toggle:
        GPIO.output(LED_1,GPIO.LOW) 
        toggle = False
   else:
        GPIO.output(LED_1,GPIO.HIGH)
        toggle = True

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(BROKER_URL, 1883)

client.loop_forever()