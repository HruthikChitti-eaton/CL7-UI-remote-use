from flask import Flask, render_template, request
from flask_socketio import SocketIO

from com import Com
from TST.main import tst

app = Flask(__name__)
socketio = SocketIO(app)

tst.init(socketio, Com.port, '/tst')

@app.route('/')
def index():
    return render_template('index.html')


# TST : 05
# @app.route('/test_led_frontpanel',methods=['POST'])
# def test_led_frontpanel() :
#     return Com.test_led_frontpanel(request.json)


if __name__ == '__main__':
    socketio.run(app=app,host='0.0.0.0',use_reloader=False, debug=True)