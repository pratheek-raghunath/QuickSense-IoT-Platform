import smbus

import time

 

import RPi.GPIO as gpio

 

PWR_M   = 0x6B

DIV   = 0x19

CONFIG       = 0x1A

GYRO_CONFIG  = 0x1B

INT_EN   = 0x38

ACCEL_X = 0x3B

ACCEL_Y = 0x3D

ACCEL_Z = 0x3F

GYRO_X  = 0x43

GYRO_Y  = 0x45

GYRO_Z  = 0x47

TEMP = 0x41

bus = smbus.SMBus(1)

Device_Address = 0x68   # device address

 

AxCal=0

AyCal=0

AzCal=0

GxCal=0

GyCal=0

GzCal=0

 

 

RS =18

EN =23

D4 =24

D5 =25

D6 =8

D7 =7

 

gpio.setwarnings(False)

gpio.setmode(gpio.BCM)

gpio.setup(RS, gpio.OUT)

gpio.setup(EN, gpio.OUT)

gpio.setup(D4, gpio.OUT)

gpio.setup(D5, gpio.OUT)

gpio.setup(D6, gpio.OUT)

gpio.setup(D7, gpio.OUT)

 

 

def begin():

  cmd(0x33) 

  cmd(0x32) 

  cmd(0x06)

  cmd(0x0C) 

  cmd(0x28) 

  cmd(0x01) 

  time.sleep(0.0005)

 

def cmd(ch): 

  gpio.output(RS, 0)

  gpio.output(D4, 0)

  gpio.output(D5, 0)

  gpio.output(D6, 0)

  gpio.output(D7, 0)

  if ch&0x10==0x10:

    gpio.output(D4, 1)

  if ch&0x20==0x20:

    gpio.output(D5, 1)

  if ch&0x40==0x40:

    gpio.output(D6, 1)

  if ch&0x80==0x80:

    gpio.output(D7, 1)

  gpio.output(EN, 1)

  time.sleep(0.005)

  gpio.output(EN, 0)

  # Low bits

  gpio.output(D4, 0)

  gpio.output(D5, 0)

  gpio.output(D6, 0)

  gpio.output(D7, 0)

  if ch&0x01==0x01:

    gpio.output(D4, 1)

  if ch&0x02==0x02:

    gpio.output(D5, 1)

  if ch&0x04==0x04:

    gpio.output(D6, 1)

  if ch&0x08==0x08:

    gpio.output(D7, 1)

  gpio.output(EN, 1)

  time.sleep(0.005)

  gpio.output(EN, 0)

  

def write(ch): 

  gpio.output(RS, 1)

  gpio.output(D4, 0)

  gpio.output(D5, 0)

  gpio.output(D6, 0)

  gpio.output(D7, 0)

  if ch&0x10==0x10:

    gpio.output(D4, 1)

  if ch&0x20==0x20:

    gpio.output(D5, 1)

  if ch&0x40==0x40:

    gpio.output(D6, 1)

  if ch&0x80==0x80:

    gpio.output(D7, 1)

  gpio.output(EN, 1)

  time.sleep(0.005)

  gpio.output(EN, 0)

  # Low bits

  gpio.output(D4, 0)

  gpio.output(D5, 0)

  gpio.output(D6, 0)

  gpio.output(D7, 0)

  if ch&0x01==0x01:

    gpio.output(D4, 1)

  if ch&0x02==0x02:

    gpio.output(D5, 1)

  if ch&0x04==0x04:

    gpio.output(D6, 1)

  if ch&0x08==0x08:

    gpio.output(D7, 1)

  gpio.output(EN, 1)

  time.sleep(0.005)

  gpio.output(EN, 0)

def clear():

  cmd(0x01)

 

def Print(Str):

  l=0;

  l=len(Str)

  for i in range(l):

    write(ord(Str[i]))

    

def setCursor(x,y):

        if y == 0:

                n=128+x

        elif y == 1:

                n=192+x

        cmd(n)

 

 

def InitMPU():

	bus.write_byte_data(Device_Address, DIV, 7)

	bus.write_byte_data(Device_Address, PWR_M, 1)

	bus.write_byte_data(Device_Address, CONFIG, 0)

	bus.write_byte_data(Device_Address, GYRO_CONFIG, 24)

	bus.write_byte_data(Device_Address, INT_EN, 1)

	time.sleep(1)

 

def display(x,y,z):

      x=x*100

      y=y*100

      z=z*100

      x= "%d" %x

      y= "%d" %y

      z= "%d" %z

      setCursor(0,0)

      Print("X     Y     Z")

      setCursor(0,1)

      Print(str(x))

      Print("   ")

      setCursor(6,1)

      Print(str(y))

      Print("   ")

      setCursor(12,1)

      Print(str(z))

      Print("   ")

 

      print(x)

      print(y)

      print(z)

 

 

def readMPU(addr):

	high = bus.read_byte_data(Device_Address, addr)

	low = bus.read_byte_data(Device_Address, addr+1)

	value = ((high << 8) | low)

	if(value > 32768):

		value = value - 65536

	return value

def accel():

	x = readMPU(ACCEL_X)

	y = readMPU(ACCEL_Y)

	z = readMPU(ACCEL_Z)

	 

	Ax = (x/16384.0-AxCal) 

	Ay = (y/16384.0-AyCal) 

	Az = (z/16384.0-AzCal)

	 

	#print "X="+str(Ax)

	display(Ax,Ay,Az)

	time.sleep(.01)

 

def gyro():

      global GxCal

      global GyCal

      global GzCal

      x = readMPU(GYRO_X)

      y = readMPU(GYRO_Y)

      z = readMPU(GYRO_Z)

      Gx = x/131.0 - GxCal

      Gy = y/131.0 - GyCal

      Gz = z/131.0 - GzCal

      #print "X="+str(Gx)

      display(Gx,Gy,Gz)

      time.sleep(.01)

 

def temp():

  tempRow=readMPU(TEMP)

  tempC=(tempRow / 340.0) + 36.53

  tempC="%.2f" %tempC

  print(tempC)

  setCursor(0,0)

  Print("Temp: ")

  Print(str(tempC))

  time.sleep(.2)

 

def calibrate():

  clear()

  Print("Calibrate....")

  global AxCal

  global AyCal

  global AzCal

  x=0

  y=0

  z=0

  for i in range(50):

      x = x + readMPU(ACCEL_X)

      y = y + readMPU(ACCEL_Y)

      z = z + readMPU(ACCEL_Z)

  x= x/50

  y= y/50

  z= z/50

  AxCal = x/16384.0

  AyCal = y/16384.0

  AzCal = z/16384.0

  

  print(AxCal)

  print(AyCal)

  print(AzCal)

 

  global GxCal

  global GyCal

  global GzCal

  x=0

  y=0

  z=0

  for i in range(50):

    x = x + readMPU(GYRO_X)

    y = y + readMPU(GYRO_Y)

    z = z + readMPU(GYRO_Z)

  x= x/50

  y= y/50

  z= z/50

  GxCal = x/131.0

  GyCal = y/131.0

  GzCal = z/131.0

 

  print(GxCal)

  print(GyCal)

  print(GzCal)

 

 

begin();

Print("MPU6050 Interface")

setCursor(0,1)

Print("Circuit Digest")

time.sleep(2)

InitMPU()

calibrate()

while 1:

  InitMPU()

  clear()

  for i in range(20):

    temp()

  clear()

  Print("Accel")

  time.sleep(1)

  for i in range(30):

    accel()

  clear()

  Print("Gyro")

  time.sleep(1)

  for i in range(30):

    gyro()

     
