from flask import Flask, render_template
from flask_socketio import SocketIO
from threading import Thread
from logging import getLogger

from lcd_handler import lcd_handler
from keypad_handler import keypad_handler
from led_handler import led_handler 

app = Flask(__name__)
socketio = SocketIO(app)

# getLogger('werkzeug').disabled = True

lcd_handler.init('/lcd_screen',socketio)
led_handler.init('/led', socketio)
socketio.on_namespace(keypad_handler('/keypad'))


@app.route('/')
def index():
    return render_template('index.html')

def ask_user():
    while True :
        inp = input("> ")
        led_handler.set_led_state(inp,True);
        lcd_handler.update_line(3, inp)

if __name__ == '__main__':
    Thread(target=ask_user).start()
    socketio.run(app=app,host='0.0.0.0', debug=False, use_reloader=False)