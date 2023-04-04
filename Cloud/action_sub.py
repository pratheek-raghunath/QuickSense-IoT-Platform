import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe("/buzzer")

def on_message(client, userdata, msg):
    print("Toggle Buzzer")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect('broker.orensaldanha.live', 1883)
client.loop_forever()