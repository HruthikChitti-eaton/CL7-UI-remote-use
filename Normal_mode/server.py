from flask import Flask, render_template
from flask_socketio import SocketIO
from threading import Thread
from logging import getLogger

from comm import Comm
from lcd_handler import lcd_handler
from keypad_handler import keypad_handler
from led_handler import led_handler 

app = Flask(__name__)
socketio = SocketIO(app)

# getLogger('werkzeug').disabled = True

lcd_handler.init('/lcd_screen',socketio)
led_handler.init('/led', socketio)
socketio.on_namespace(keypad_handler('/keypad'))

Comm.init()

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app=app,host='0.0.0.0', debug=False, use_reloader=False)