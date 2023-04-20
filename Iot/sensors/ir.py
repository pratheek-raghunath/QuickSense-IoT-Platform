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


sensor = 13
buzzer = 18

GPIO.setmode(GPIO.BOARD)
GPIO.setup(sensor, GPIO.IN)
GPIO.setup(buzzer, GPIO.OUT)

GPIO.output(buzzer, False)
print("IR Sensor Ready.....")
print(" ")

try:
   while True:

        if GPIO.input(sensor):
            GPIO.output(buzzer, True)
            print("Object Detected")
            data = {
            "sensor": "ir",
            "user_id": USER_ID,
            "message": "Object Detected",
            "timestamp": str(datetime.datetime.now(IST))
            }

            print(data)
            (rc, mid) = client.publish(f'/{USER_ID}/alert', json.dumps(data), qos=1)
            time.sleep(1)
            while GPIO.input(sensor):
                time.sleep(0.2)
        else:
            GPIO.output(buzzer,False)

        # if int(datetime.datetime.now().strftime("%S")) % 5 == 0:
        #     data = {
        #         "sensor": "ir",
        #         "user_id": USER_ID,
        #         "data": {
        #             "status": "running"
        #         },
        #         "timestamp": str(datetime.datetime.now(IST))
        #     }
        #     print(data)
        #     (rc, mid) = client.publish(f'/{USER_ID}/data_stream/ir', json.dumps(data), qos=1)


except KeyboardInterrupt:
    GPIO.cleanup()





