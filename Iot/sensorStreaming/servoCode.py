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

import RPi.GPIO as gp  
from time import sleep  
import paho.mqtt.client as mqtt

toggle = False

gp.setmode(gp.BOARD)  
gp.setup(21,gp.OUT)  
pwm=gp.PWM(21,50)  
pwm.start(0)  

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe("/servo")

def on_message(client, userdata, msg):
   print("Toggle servo")
   if toggle:
      for i in range(0,91):  
         sig=(i/18)+2  
         pwm.ChangeDutyCycle(sig)  
         sleep(0.03)  
      toggle = False
   else:
      for i in range(90,-1,-1):  
         sig=(i/18)+2  
         pwm.ChangeDutyCycle(sig)  
         sleep(0.03)  
      toggle = True

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect('broker.orensaldanha.live', 1883)
client.loop_forever()

pwm.stop()  
gp.cleanup()  