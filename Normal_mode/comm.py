from serial import Serial
from process_serial_input import process_serial_input
from threading import Thread
from time import sleep
from datetime import datetime

file = open('log.txt','a')
class Comm :

    # Confiurations .. 
    port_num = 'COM5'
    prev_input = ''
    baud_rate = 19200
    port = None

    thread_created = False

    @staticmethod 
    def init() :
        while True :
            try :
                Comm.port = Serial(Comm.port_num,baudrate=Comm.baud_rate)
                break
            except Exception as e:
                print(datetime.now().strftime('%H:%M:%S'), "1. Exception :",e)
                sleep(1)
        if (not Comm.thread_created) :
            Thread(target = Comm.serial_read).start()
        Comm.serial_write('CUR_LCD_DATA \n')
        Comm.thread_created = True

    @staticmethod
    def serial_write(data) :
        while 1 :
            try : 
                data += '\n'
                Comm.port.write(data.encode('ascii'))
                Comm.prev_input = data
                break
            except Exception as e: 
                print(datetime.now().strftime('%H:%M:%S'), "2. Exception :" , e)
                Comm.init() 

    @staticmethod
    def serial_read() :
        part_1 = ''
        while True : 
            input_str = ''
            try :
                if Comm.port.in_waiting > 0 :  
                    input_str = Comm.port.readline().decode('utf-8')[:-1]
                    if ('LCD P02' == input_str[:7]) :
                        while True :
                            if (Comm.port.in_waiting > 0) :
                                input_str += '\n' + Comm.port.readline().decode('utf-8')[:-1]
                                break
                    print(input_str)
                    process_serial_input(input_str)

            except Exception as e :
                print(datetime.now().strftime('%H:%M:%S'), '4. Exception :',e)
                Comm.init()