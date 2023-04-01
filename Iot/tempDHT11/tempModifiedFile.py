import Adafruit_DHT
import paho.mqtt.client as paho
import datetime
import time
import json
import pytz

IST = pytz.timezone('Asia/Kolkata')

client = paho.Client()
client.connect('broker.orensaldanha.live', 1883)
client.loop_start()

while True:
	humidity,temperature = Adafruit_DHT.read_retry(11,17)

	data = {
		"device" : "temperture_sensor",
		"temperature": temperature,
		"humidty": humidity,
		"timestamp": str(datetime.datetime.now(IST))
	}

	print(data)
	(rc, mid) = client.publish('/temp', json.dumps(data), qos=1)
	time.sleep(1)
