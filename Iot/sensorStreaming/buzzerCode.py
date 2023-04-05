from gpiozero import Buzzer
from time import sleep
import paho.mqtt.client as mqtt

buzzer = Buzzer(22)

# while True:
# 	buzzer.on()
# 	sleep(1)
# 	buzzer.off()
# 	sleep(1)

toggle = False

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe("/buzzer")

def on_message(client, userdata, msg):
	global toggle
	print("Toggle Buzzer")
	if toggle:
		buzzer.off()
		toggle = False
	else:
		buzzer.on()
		toggle = True

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect('broker.orensaldanha.live', 1883)
client.loop_forever()



