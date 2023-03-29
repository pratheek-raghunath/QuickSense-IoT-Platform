import RPi.GPIO as GPIO
import time
TRIG=21
ECHO=20
GPIO.cleanup()
GPIO.setmode(GPIO.BCM)
while True:
    print("distance measurement in progress")
    GPIO.setup(TRIG,GPIO.OUT)
    GPIO.setup(ECHO,GPIO.IN)
    GPIO.output(TRIG,False)
    print("waiting for sensor to settle")
    time.sleep(0.2)
    GPIO.output(TRIG,True)
    time.sleep(0.00001)
    GPIO.output(TRIG,False)
    while GPIO.input(ECHO)==0:
        pulse_start=time.time()
    while GPIO.input(ECHO)==1:
        pulse_end=time.time()
    pulse_duration=pulse_end-pulse_start
    pulse_duration = round(pulse_duration/2,2)
    distance=pulse_duration*34000
    print("Object is at ",distance," cm from the Ultrasonic sensor")
    #print("distance:",distance,"cm")
    time.sleep(2)
    GPIO.cleanup()  
