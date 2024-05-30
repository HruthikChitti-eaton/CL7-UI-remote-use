from serial import Serial
from os.path import isfile as file_exists
from json import loads as json_to_dict
from os import remove as remove_file
from flask_socketio import Namespace, emit
# Gotta fix the try and except cases in this file 

class Com(Namespace) : 
    config_file = '.config.json'
    base = '/com'

    def on_update_config(self, data):
        Com.port = data.port_num 
        Com.braud_rate = data.braud_rate
        try :
            Com.port = Serial(port = Com.port_num, baudrate = Com.braud_rate, timeout = Com.timeout)
        except :
            Com.notify_bad_config()

    def notify_bad_config():
        Com.socketio.emit('bad_config',
                          'Please check if the selected port and Braud rate are appropriate. Ensure that the selected port is not being used by some other process or program',
                          namespace = Com.base
                          )

    @staticmethod
    def init(socketio) :
        Com.socketio = socketio
        socketio.on_namespace(Com(Com.base))
        if file_exists('.config.json') :
            data = open('.config.json','r').read()
            try :
                data = json_to_dict(data)
                Com.braud_rate = data['braud_rate']
                Com.port_num = data['port_num']
            except :
                Com.braud_rate = None
                Com.port_num = None
                remove_file('.config.json')
        else :
            Com.braud_rate = None
            Com.port_num = None

        if Com.port_num and Com.braud_rate :
            try : 
                print([Com.port_num, Com.braud_rate])
                Com.port = Serial(port = Com.port_num, baudrate = Com.braud_rate)
            except Exception as e:
                print(e)
                Com.port = None
        else :
            Com.port = None

    @staticmethod
    def read_from_port():
        output = []
        try :
            while Com.port.in_waiting > 0 :
                data = Com.port.readline().decode('utf-8')
                if (data != '\r\n') :
                    output.append(data)
            return True, output
        except Exception as e : 
            Com.notify_bad_config()
            return False, output
    
    @staticmethod
    def write_to_port(input_str) :
        try :
            Com.port.write(input_str)
            return True
        except Exception as e:
            Com.notify_bad_config()
            return False
