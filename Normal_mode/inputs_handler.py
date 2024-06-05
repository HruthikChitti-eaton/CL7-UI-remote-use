from flask_socketio import Namespace

class inputs_handler(Namespace) :   

    def on_no_comb(self, data):
        print(data)

    def on_comb(self, data) :
        pass 