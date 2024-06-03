from flask import Flask, render_template
from flask_socketio import SocketIO
from threading import Thread

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('lcd.html')

def ask_user():
    while True :
        inp = input("> ")
        socketio.emit('updateLCD',inp)

if __name__ == '__main__':
    Thread(target=ask_user).start()
    socketio.run(app=app,host='0.0.0.0',use_reloader=False, debug=True)