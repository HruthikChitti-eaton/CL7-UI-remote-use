
from .keypad_handler import keypad_handler
from .lcd_handler import lcd_handler
from .comm import Comm
from threading import Thread
from signal import signal, SIGINT
from .config import Config

def init(baud_rate, serial_port_name, server_port_num = 5000, init_server = True, logs = False) :

    signal(SIGINT, Comm.stop)
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

        # socketio.run(app, port=server_port_num, host='0.0.0.0'
        #              , debug=False, use_reloader=False)
        server_thread = Thread(target = socketio.run, args = (app,), kwargs = {'port' : server_port_num, 'host' : '0.0.0.0', 'debug' : False, 'use_reloader' : False})
        server_thread.setDaemon(False)
        server_thread.start()
        server_thread.join()

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

def cleanup():
    Comm.stop(None,None)