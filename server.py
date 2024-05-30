from flask import Flask, render_template, request
from flask_socketio import SocketIO

from com import Com
from TST.main import tst

app = Flask(__name__)
socketio = SocketIO(app)

Com.init(socketio)
tst.init(socketio, '/tst')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app=app,host='0.0.0.0',use_reloader=False, debug=True)