#!/usr/bin/env python3
import serial
import paho.mqtt.client as paho
import datetime
import time
import json
import pytz
import RPi.GPIO as GPIO
import time
import os

IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

client = paho.Client()
client.connect(BROKER_URL, 1883)
client.loop_start()

if __name__ == '__main__':
    ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
    ser.reset_input_buffer()
    while True:
        if ser.in_waiting > 0:
            try:
                time.sleep(5)
                line = ser.readline().decode('utf-8').rstrip()
                value = line.split(":")[1].split("|")[0].strip()
                msg = line.split(":")[1].split("|")[1].strip()

                print(line)
                data = {
                    "sensor": "gas",
                    "user_id": USER_ID,
                    "data": {
                        "value": value, 
                        "message": msg
                    },
                    "timestamp": str(datetime.datetime.now(IST))
                }

                print(data)
                (rc, mid) = client.publish(f'/{USER_ID}/data_stream/gas', json.dumps(data), qos=1)
                time.sleep(1)
            except Exception as e:
                print(e)
