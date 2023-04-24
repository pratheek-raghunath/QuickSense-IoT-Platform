# import RPi.GPIO as gp  
# from time import sleep  
# gp.setmode(gp.BOARD)  
# gp.setup(21,gp.OUT)  
# pwm=gp.PWM(21,50)  
# pwm.start(0)  
# for i in range(0,91):  
#    sig=(i/18)+2  
#    pwm.ChangeDutyCycle(sig)  
#    sleep(0.03)  
# for i in range(90,-1,-1):  
#    sig=(i/18)+2  
#    pwm.ChangeDutyCycle(sig)  
#    sleep(0.03)  
# pwm.stop()  
# gp.cleanup()  

#Right door servo ()

import RPi.GPIO as gp  
import time 
import paho.mqtt.client as mqtt
import os
import pytz
import json
import datetime

IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

toggle = False

gp.setmode(gp.BOARD)  
gp.setup(23,gp.OUT)  
pwm=gp.PWM(23,50)  
pwm.start(0)  

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(f"/{USER_ID}/action/servo")

def on_message(client, userdata, msg):
   global toggle
   print("Toggle servo")
   if toggle:
        for i in range(180, 90, -1):  
            sig=(i/18)+2  
            pwm.ChangeDutyCycle(sig)  
            time.sleep(0.03)  
        toggle = False
   else:
        for i in range(90, 181, 1):  
            sig=(i/18)+2  
            pwm.ChangeDutyCycle(sig)  
            time.sleep(0.03)  
        toggle = True

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(BROKER_URL, 1883)

#client.loop_forever()

client.loop_start()

try:
	while True:
		if int(datetime.datetime.now().strftime("%S")) % 5 == 0:
			data = {
				"sensor": "servo",
				"user_id": USER_ID,
				"data": {
					"status": "running"
				},
				"timestamp": str(datetime.datetime.now(IST))
			}
			print(data)
			(rc, mid) = client.publish(f'/{USER_ID}/data_stream/servo', json.dumps(data), qos=1)
		time.sleep(1)
except:
    print("Stopping mqtt loop")
    client.loop_stop()
    pwm.stop()  
    gp.cleanup()  
