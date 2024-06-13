from serial import Serial
from lcd_handler import lcd_handler
from threading import Thread
from time import sleep

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
                print("1. Exception :",e)
                sleep(1)
        if (not Comm.thread_created) :
            Thread(target = Comm.serial_read).start()
        Comm.serial_write('CUR_LCD_DATA \n')
        Comm.thread_created = True

    @staticmethod
    def serial_write(data) :
        while 1 :
            try : 
                Comm.port.write(data.encode('ascii'))
                Comm.prev_input = data
                break
            except Exception as e: 
                print("2. Exception :" , e)
                Comm.init() 

    @staticmethod
    def serial_read() :
        while True : 
            output = ''
            try :
                if Comm.port.in_waiting > 0 :   
                    output = Comm.port.readline()
                    resend_required = False 
                    try : 
                        output = output.decode('utf-8')
                        if ('ODD one' in output) : 
                            resend_required = True
                    except :
                        # Gotta add additional stuff here later like str(output) and ODD one in output
                        resend_required = True 
                    if (resend_required) : 
                        print("DATA RESENT")
                        Comm.serial_write(Comm.prev_input)
                    else :
                        if (output[:3] == 'LCD') :
                            output = output.split(' ')
                            if (output[1] == 'pc') :
                                try :
                                    row_index = int(output[2])
                                    col_index = int(output[3])
                                    if (output[4] != '\n' or output[4] != '') :
                                        char = output[4]
                                    else :
                                        char = ' '
                                    lcd_handler.update_char(row_index, col_index, char)
                                except Exception as e:
                                    print(e)

                            elif (output[1] == 'display_clear') :
                                lcd_handler.clear_screen()

                        elif (output[:12] == 'CUR_LCD_DATA'):
                            if (output[13:16] == 'ROW') :
                                row_num = int(output[17])
                                output = output[19:-1]
                                row_str = ''
                                for a in output :
                                    if (a == '') :
                                        row_str += ' '
                                    else :
                                        row_str += a 
                                lcd_handler.update_line(row_num,row_str)
            except Exception as e :
                print('3. Exception :',e)
                Comm.init()