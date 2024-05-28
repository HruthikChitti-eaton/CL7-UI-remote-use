from serial import Serial
from TST.tst_05 import tst_05
from flask import jsonify


class Com : 

    # com config
    port_num = 'COM4'
    braud_rate = 19200
    timeout = 1
    port = ''
    port = Serial(port = port_num, baudrate = braud_rate, timeout = timeout)

    # Set all leds to off
    tst_05.write_num(0, port)
