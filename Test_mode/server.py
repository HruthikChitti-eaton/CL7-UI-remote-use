from flask import Flask, render_template, request
from flask_socketio import SocketIO

from Test_mode.com import Com
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

    # Given dictionary
given_dict = {
    '_': ['00000','00000','00000','00000','00000','00000','11111','00000'],
    '^': ['00100','01010','10001','00000','00000','00000','00000','00000'],
    '[': ['01110','01000','01000','01000','01000','01000','01110','00000'],
    # Other entries...
}

# Convert the given dictionary into the specified format
converted_dict = {}

for char, pattern in given_dict.items():
    converted_pattern = []
    for row in pattern:
        converted_row = [True if pixel == '1' else False for pixel in row]
        converted_pattern.append(converted_row)
    converted_dict[char] = converted_pattern

print(converted_dict)
