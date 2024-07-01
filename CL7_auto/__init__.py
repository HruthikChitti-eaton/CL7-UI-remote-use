from time import sleep, time
from threading import Thread

from .keypad_handler import keypad_handler
from .lcd_handler import lcd_handler
from .comm import Comm
from .config import Config
from .shared_vars import keyCode_confirmation

def init(baud_rate, serial_port_name, server_port_num = 5000, init_server = False, logs = False) :

    Config.init_server = init_server

    if (init_server) :

        from .lcd_handler import lcd_handler
        from .led_handler import led_handler

        from flask import Flask, render_template
        from flask_socketio import SocketIO 

        app = Flask(__name__)
        socketio = SocketIO(app)

        if (not logs) :
            from logging import getLogger
            getLogger('werkzeug').disabled = True

        @app.route('/')
        def index():
            return render_template('index.html')
        
        lcd_handler.init('/lcd_display',socketio)
        led_handler.init('/led', socketio)
        socketio.on_namespace(keypad_handler('/keypad'))

        Comm.serial_port_name = serial_port_name
        Comm.baud_rate = baud_rate
        Comm.init()

        server_thread = Thread(target = socketio.run, args = (app,), kwargs = {'port' : server_port_num, 'host' : '0.0.0.0', 'debug' : False, 'use_reloader' : False})
        server_thread.setDaemon(False)
        server_thread.start()

    else :
        Comm.serial_port_name = serial_port_name
        Comm.baud_rate = baud_rate
        Comm.init()
    
def send_key(key) :
    keyCode = keypad_handler.codes.get(key, None)
    if (keyCode != None) :
        return send_keyCode(keyCode) 
    else :
        return 0

def send_keyCode(keyCode) :
    return keypad_handler.send_keyCode(keyCode)
    
def get_text_on_display() :
    return lcd_handler.screen_data

# Kills entire process 
def clean_up():
    Comm.stop(None,None)

def wait_till_processed(timeout = 5, sleep_time = 0.2):
    start_time = time()
    while (keyCode_confirmation.len_sent_keyCodes != 0) :
        if (time() - start_time) >= timeout :
            return False
        # Allow other threads to run
        sleep(sleep_time)
    return True 

# Closes everything / cleans everythin
def free_port() :
    Comm.keep_reading = False
    Comm.port.close()
    lcd_handler.clear_display()
    keyCode_confirmation.sent_keyCodes = []
    keyCode_confirmation.len_sent_keyCodes = 0