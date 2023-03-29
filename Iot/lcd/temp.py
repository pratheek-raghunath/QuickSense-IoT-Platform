import time
from RPLCD import CharLCD
lcd = CharLCD(cols=16, rows=2, pin_rs=37, pin_e=35, pins_data=[33, 31, 29, 23])

lcd.write_string(u'Hello world!')
time.sleep(2)
lcd.clear()
