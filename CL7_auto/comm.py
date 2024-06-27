from serial import Serial
from .process_serial_input import process_serial_input
from threading import Thread
from os import getpid 
from psutil import Process

class Comm :

    # Confiurations .. 
    serial_port_name = 'COM5'
    baud_rate = 19200
    init_server = True
    serial_read_thread = None
    
    port = None

    @staticmethod 
    def init(callee = "main") :
        try : 
            Comm.port = Serial(Comm.serial_port_name,baudrate=Comm.baud_rate)
        except Exception as e:
            print(f"FAILED TO INITIALIZE SERIAL PORT : {e}")
            Process(getpid()).terminate()
        if (not Comm.serial_read_thread) :
            Comm.serial_read_thread = Thread(target = Comm.serial_read).start()
        Comm.serial_write('CUR_LCD_DATA \n')
        return 1

    @staticmethod
    def serial_write(data) :
        while 1 :
            try : 
                data += '\n'
                Comm.port.write(data.encode('ascii'))
                break
            except PermissionError :
                print("FAILED TO WRITE DATA, ATTEMPTING TO REINTIALIZE")
                Comm.init()

    @staticmethod
    def stop(sig, frame) :
        Process(getpid()).terminate()

    @staticmethod
    def serial_read() :
        while 1: 
            input_str = ''
            try :
                if Comm.port.in_waiting > 0 :  
                    input_str = Comm.port.readline().decode('utf-8')[:-1]
                    if ('LCD P02' == input_str[:7]) :
                        while True :
                            if (Comm.port.in_waiting > 0) :
                                input_str += '\n' + Comm.port.readline().decode('utf-8')[:-1]
                                break
                    # print(input_str)
                    process_serial_input(input_str)
            except PermissionError :
                print("FAILED TO READ DATA, ATTEMPTING TO REINITIALIZE")
                Comm.init()
            except Exception as e :
                if ("ClearCommError failed" in str(e)) :
                    print("FAILED TO READ DATA, ATTEMPTING TO REINITIALIZE")
                    Comm.init()
                else :
                    print(f"UNKNOWN ERROR : {e}")