from serial import Serial
from threading import Thread, Event

stop_flag = Event()
cur_input = ''

class Config :
    port = 'COM4'
    braudrate = 19200
    timeout = 1

def read_and_check_port_alive () :
    global port 
    
    file = open('log.txt','a+')
    port = Serial(Config.port, Config.braudrate, Config.timeout)
    while not stop_flag.is_set() : 
        try : 
            if port.in_waiting > 0 :
                data = port.readline().decode('utf-8')
                if not (data == '\r\n' or data == cur_input or data == '\n') :
                    file.write(str([data])+'\n')
                    file.flush()

                # else :
                # # print(data)
                #     print(f"Recieved : '{data}'")

        except Exception as e :
            print("Looks like port disconnected ... ")
            while True :
                try :
                    port.in_waiting
                    break 
                except :
                    pass 
            # print(e)
            # break

def write() :
    global cur_input
    while True :
        print('Enter command : ',end='')
        data = input("Enter command : ")
        cur_input = data+'\n'
        if data == 'exit' :
            # not_exit = False
            stop_flag.set()
            port.close()
            break
        port.write(data.encode('ascii'))
        port.write(b'\n')

if __name__ == "__main__" :
    port = Serial('COM4',baudrate=19200,timeout=1)
    read_thread = Thread(target=read_and_check_port_alive, args = (port,))
    read_thread.daemon - True
    read_thread.start()
    write(port)
    read_thread.join()
