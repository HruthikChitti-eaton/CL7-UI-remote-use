from flask_socketio import Namespace

class lcd_handler(Namespace) :

    @staticmethod
    def init(route, socket) :
        socket.on_namespace(lcd_handler(route))
        lcd_handler.route = route 
        lcd_handler.socket = socket

    @staticmethod
    def clear_screen():
        lcd_handler.emit('clear_screen','')

    @staticmethod
    def back_light_on():
        lcd_handler.emit('back_light_on','')

    @staticmethod
    def back_light_off():
        lcd_handler.emit('back_light_off','')

    @staticmethod
    def update_char(row, column, char):
        lcd_handler.emit('update_char', {'row' : row, 'column' : column, 'char' : char})

    @staticmethod
    def update_line(row, line) :
        lcd_handler.emit('update_line', {'row' : row, 'line' : line})

    @staticmethod
    def emit(event,data) :
        lcd_handler.socket.emit(event, data, namespace=lcd_handler.route)

class key_pad(Namespace):
    def om_key_press(self, data):
        print(data)