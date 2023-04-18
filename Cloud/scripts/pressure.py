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

while True:
    print(datetime.datetime.now().strftime("%S"))
    if int(datetime.datetime.now().strftime("%S")) % 5 == 0:
        data = {
            "sensor": "pressure",
            "user_id": USER_ID,
            "data": {
                "status": "running"
            },
            "timestamp": str(datetime.datetime.now(IST))
        }
        print(data)
        (rc, mid) = client.publish(f'/{USER_ID}/data_stream/pressure', json.dumps(data), qos=1)

    elif int(datetime.datetime.now().strftime("%S")) % 3 == 0:
        data = {
            "sensor": "pressure",
            "user_id": USER_ID,
            "message": "Under Pressure",
            "timestamp": str(datetime.datetime.now(IST))
        }
        print(data)
        (rc, mid) = client.publish(f'/{USER_ID}/alert', json.dumps(data), qos=1)

    time.sleep(1)