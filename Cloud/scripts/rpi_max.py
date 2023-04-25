import paho.mqtt.client as paho
import psutil
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

while True:
    data = {
        "sensor": "rpi",
        "user_id": USER_ID,
        "data": {
            "cpu_temperature": psutil.sensors_temperatures()['dell_smm'][0].current,
            "memory_usage": psutil.virtual_memory()[2],
            "cpu_usage": psutil.cpu_percent()
        },
        "timestamp": str(datetime.datetime.now(IST))
    }
    print(data)
    (rc, mid) = client.publish(
        f'/{USER_ID}/data_stream/rpi', json.dumps(data), qos=1)
    time.sleep(3)
