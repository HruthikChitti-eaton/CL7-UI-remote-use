from flask_socketio import Namespace

class keypad_handler(Namespace) :   

    # gotta make lot of changes ?
    def on_key_pressed(self, data) :
        print(data)