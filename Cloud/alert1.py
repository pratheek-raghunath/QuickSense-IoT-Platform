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

counter = 0

while True:
    data = {
        "sensor": "alert1",
        "message": "alert",
        "timestamp": str(datetime.datetime.now(IST))
    }
    print(data)
    (rc, mid) = client.publish('/alert/alert1', json.dumps(data), qos=1)
    time.sleep(3)