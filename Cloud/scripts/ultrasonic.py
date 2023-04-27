import paho.mqtt.client as paho
import psutil
import datetime
import time
import json
import pytz
import os
import random

IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

client = paho.Client()
client.connect(BROKER_URL, 1883)
client.loop_start()

while True:
    data = {
        "sensor": "ultrasonic",
        "user_id": USER_ID,
        "data": {
            "distance": round(random.uniform(5.0, 6.5), 1),
        },
        "timestamp": str(datetime.datetime.now(IST))
    }
    print(data)
    (rc, mid) = client.publish(f'/{USER_ID}/data_stream/ultrasonic', json.dumps(data), qos=1)
    time.sleep(3)