import paho.mqtt.client as paho
import datetime
import time
import json
import pytz
import RPi.GPIO as GPIO
import time

IST = pytz.timezone('Asia/Kolkata')

client = paho.Client()
client.connect('broker.orensaldanha.live', 1883)
client.loop_start()


sensor = 13
buzzer = 18

GPIO.setmode(GPIO.BOARD)
GPIO.setup(sensor, GPIO.IN)
GPIO.setup(buzzer, GPIO.OUT)

GPIO.output(buzzer, False)
print("IR Sensor Ready.....")
print(" ")

try:
   while True:

      if GPIO.input(sensor):
          GPIO.output(buzzer, True)
          print("Object Detected")
          data = {
            "sensor": "IR",
            "message": "Object Detetceted",
            "timestamp": str(datetime.datetime.now(IST))
          }

          print(data)
          (rc, mid) = client.publish('/ir', json.dumps(data), qos=1)
          time.sleep(1)
          while GPIO.input(sensor):
              time.sleep(0.2)
      else:
          GPIO.output(buzzer,False)


except KeyboardInterrupt:
    GPIO.cleanup()





