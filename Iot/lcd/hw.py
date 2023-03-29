import RPi.GPIO as GPIO
from RPLCD.gpio import CharLCD
#GPIO.setmode(GPIO.BOARD)  
GPIO.setwarnings(False)

lcd = CharLCD(cols=20, rows=4, pin_rs=37, pin_e=35, pins_data=[40, 38, 36, 32, 33, 31, 29, 23], numbering_mode=GPIO.BOARD)
lcd.clear()
lcd.write_string("Hello world!")
