## How to run ?
1) Run ```pip install -r requirements.txt```
1) Open the file ```Com.py``` and edit these static values in Com class.
```python
    port_num = 'COM4'
    braud_rate = 19200
```
2) Run server.py

## Base plan
Design a web interface through which user can send locom commands to the control 

## Execution 

- Language  : Python 
- Libraries : 
    + `Flask` : Will be used to handle the requests
    + `Serial` : Will be used to establish, maintain and communicate via seril port
    + `Threading` : Will be used to create and maintain a thread that constantly reads from the serial port

## File Structure : 

    ROOT_DIR
        ├─ Templates
        │    └─ index.html
        ├─ Static
        │    ├─ index.js
        │    └─ styles.css
        ├─ TST
        │    └─ tst_**.py    (** can be 05 or F1 etc.) 
        ├─ CMD
        │    └─ cmd_**.py    (** can be 05 or F1 etc.)
        ├─ SDT
        │    └─ SDT_**.py    (** can be 05 or F1 etc.)
        └─ server.py
        └─ com.py

### server.py
- This is the main file, that is executed. Handles all the requests and keeps the server alive 
    ```python
    if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
    ```

- Imports Com class from `com.py`
    ```python
    from com import Com
    ```

- Renders the html file
    ```python
    @app.route('/')
    def index():
        return render_template('index.html')
    ```
- Handles requests for each locom command, all requests are of type `POST`. 

    The route (`/test_led_frontpanel` in this case) ***has the same name as the function called when the test is run in the firmware.***

    Test Trigger is mentioned as a comment on top of every route handler (`# TST:05` in this case)
    ```python
    # TST : 05
    @app.route('/test_led_frontpanel',methods=['POST'])
    def test_led_frontpanel() :
        return Com.test_led_frontpanel(request.json)
    ```

### com.py
- Initiates the serial communication with control 
    ```python
    # com config
    port_num = 'COM4'
    braud_rate = 19200
    timeout = 1
    port = Serial(port = port_num, baudrate = braud_rate, timeout = timeout)
    ```

- Imports all test files / locom trigger functions
    ```python
    from TST.tst_05 import tst_05
    ```

- Constantly reads for input from serial communication **and then verifies if its the desired output**
    ```python
        # Code to be written, boiler plate code is written in Test folder though..
    ```

- Tries to reestablish the communication and notifies user, incase of com disconnection
    ```python
        # Code to be written
    ```

- Initially sets all leds to off, turns on back light, sets contrast to 8 etc..
    ```python
    # Set all leds to off
    tst_05.write_num(0, port)

    # Other settings to be implemented ...
    ```
- Calls function to execute other locom triggers and returns the output in json format for js in frontend
    ```python
    @staticmethod  
    def led_front_panel(_id) :
        return jsonify(led = tst_05.test_led_frontpanel(_id, Com.port)) 

    ```

# tst, cmd, sdt files 
- Will recieve port from Com class ```Com.port```.
- Will form the arguments (if any) for the locom trigger depending on the recieved input. Refer to `TST\tst_05.py`
- Writing locom triggers to the serial port will happen through these files
    - Example :
    ```python
        port.write(cmd_str.encode('ascii'))   
    ```
