import paho.mqtt.client as mqtt
import os

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

toggle = False

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(f"/{USER_ID}/action/buzzer")

def on_message(client, userdata, msg):
	global toggle
	print("Toggle Buzzer")
	if toggle:
		print("Buzzer Off")
		toggle = False
	else:
		print("Buzzer on")
		toggle = True

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(BROKER_URL, 1883)
client.loop_forever()



