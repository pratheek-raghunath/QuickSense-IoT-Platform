import RPi.GPIO as GPIO
import time

LED_1 = 23
LED_2 = 24

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(LED_1,GPIO.OUT)
GPIO.setup(LED_2,GPIO.OUT)

# While loop
while True:
        # set GPIO14 pin to HIGH
        GPIO.output(LED_1,GPIO.HIGH)
        GPIO.output(LED_2,GPIO.HIGH)
        # show message to Terminal
        print("LED is ON")
        # pause for one second
        time.sleep(0.3)


        # set GPIO14 pin to HIGH
        GPIO.output(LED_1,GPIO.LOW)
        GPIO.output(LED_2,GPIO.LOW)
        # show message to Terminal
        print("LED is OFF")
        # pause for one second
        time.sleep(0.3)
