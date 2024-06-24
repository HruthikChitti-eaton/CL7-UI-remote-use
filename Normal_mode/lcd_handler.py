from flask_socketio import Namespace

class lcd_handler(Namespace) :

    screen_data = ['                    ',
                   '                    ',
                   '                    ',
                   '                    ']
    LCD_LINE_SIZE = 20
    MAX_NUMBER_OF_LCD_LINES = 4
    sequential = True

    @staticmethod
    def init(route, socket) :
        socket.on_namespace(lcd_handler(route))
        lcd_handler.route = route 
        lcd_handler.socket = socket

    @staticmethod
    def clear_display():
        for a in range (4) : 
            lcd_handler.screen_data[a] = ' '*20
        lcd_handler.emit('clear_display','')

    @staticmethod
    def display_on():
        lcd_handler.emit('display_on','')

    @staticmethod
    def display_off():
        lcd_handler.emit('display_off','')

    @staticmethod
    def update_char(row, column, char):
        if (char == '') : char = ' '
        temp = list(lcd_handler.screen_data[row])
        temp[column] = char
        lcd_handler.screen_data[row] = "".join(temp)
        lcd_handler.emit('update_char', {'row' : row, 'column' : column, 'char' : char})

    @staticmethod
    def update_line(row, line) :
        lcd_handler.screen_data[row] = line
        lcd_handler.emit('update_line', {'row' : row, 'line' : line})

    @staticmethod
    def emit(event,data) :
        lcd_handler.socket.emit(event, data, namespace=lcd_handler.route)
            
    def on_get_cur_states(self, data):
        for row, line in enumerate(lcd_handler.screen_data) :
            lcd_handler.update_line(row, line)