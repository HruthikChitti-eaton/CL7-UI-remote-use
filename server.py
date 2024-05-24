
from flask import Flask, render_template, request, jsonify
from com import Com

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# TST : 05
@app.route('/test_led_frontpanel',methods=['POST'])
def test_led_frontpanel() :
    return Com.test_led_frontpanel(request.json)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)