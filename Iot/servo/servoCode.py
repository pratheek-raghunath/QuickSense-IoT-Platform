import RPi.GPIO as gp  
from time import sleep  
gp.setmode(gp.BOARD)  
gp.setup(21,gp.OUT)  
pwm=gp.PWM(21,50)  
pwm.start(0)  
for i in range(0,181):  
   sig=(i/18)+2  
   pwm.ChangeDutyCycle(sig)  
   sleep(0.03)  
for i in range(180,-1,-1):  
   sig=(i/18)+2  
   pwm.ChangeDutyCycle(sig)  
   sleep(0.03)  
pwm.stop()  
gp.cleanup()  
