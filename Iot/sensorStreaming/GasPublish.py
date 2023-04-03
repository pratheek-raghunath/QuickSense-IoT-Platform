#!/usr/bin/env python3
import serial
import paho.mqtt.client as paho
import datetime
import time
import json
import pytz
import RPi.GPIO as GPIO
import time

IST = pytz.timezone('Asia/Kolkata')

client = paho.Client()
client.connect('broker.orensaldanha.live', 1883)
client.loop_start()

if __name__ == '__main__':
    ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
    ser.reset_input_buffer()
    while True:
        if ser.in_waiting > 0:
	    time.sleep(5)
            line = ser.readline().decode('utf-8').rstrip()
            time.sleep(5)
            value = line.split(":")[1].split("|")[0].strip()
            msg = line.split(":")[1].split("|")[1].strip()

            print(line)
            data = {
            "sensor": "Gas",
            "data": {"value": value, "message": msg},
            "timestamp": str(datetime.datetime.now(IST))
            }

            print(data)
            (rc, mid) = client.publish('/gas', json.dumps(data), qos=1)
            time.sleep(1)
