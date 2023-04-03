import paho.mqtt.client as paho
import psutil
import datetime
import time
import json
import pytz

IST = pytz.timezone('Asia/Kolkata')

client = paho.Client()
client.connect('broker.orensaldanha.live', 1883)
client.loop_start()

while True:
    data = {
        "sensor": "ds1",
        "data": {
            "temperature": psutil.sensors_temperatures()['thinkpad'][0].current,
        },
        "timestamp": str(datetime.datetime.now(IST))
    }
    print(data)
    (rc, mid) = client.publish('/ds1', json.dumps(data), qos=1)
    time.sleep(1)