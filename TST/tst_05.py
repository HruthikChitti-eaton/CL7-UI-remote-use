from flask_socketio import Namespace, emit

class tst_05(Namespace) :

    led_vals = {
        "all_off"            : 0 ,
        "vr_1"               : 1 ,
        "vr_2"               : 2 , 
        "vr_3"               : 4 ,
        "volt_limitter_high" : 8 ,
        "out_of_band_high"   : 10 ,
        "out_of_band_low"    : 20 ,
        "volt_limitter_low"  : 40 ,
        "auto_tap_blocked"   : 80 ,
        "reverse_power"      : 100 ,
        "volt_reduction"     : 200 ,
        "data_ports"         : 400 ,
        "super_visory_off"   : 800 ,
        "drag_hand_reset"    : 1_000 ,
        "alarm"              : 2_000 ,
        "warning"            : 4_000 ,
        "diag_error"         : 8_000 ,
        "ud_1"               : 10_000 ,
        "ud_2"               : 20_000 ,
        "ud_3"               : 40_000 ,
        "com_1_tx"           : 80_000 ,
        "com_1_rx"           : 100_000 ,
        "com_2_tx"           : 200_000 ,
        "com_2_rx"           : 400_000 ,
        "all_on"             : "7fffff"
    }
    cur_switched_on = ''

    def init(port) :
        tst_05.port = port 

    def on_led_status_cs(self, _id) :
        print(_id)
        if _id == tst_05.cur_switched_on :
            tst_05.write_num(0, tst_05.port)
            tst_05.cur_switched_on = "all_off"
    
        else :
            tst_05.write_num(tst_05.led_vals[_id], tst_05.port)
            tst_05.cur_switched_on = _id 

        emit('led_status_sc',tst_05.cur_switched_on)

    @staticmethod
    def write_num(num, port) :
        # pass 
        cmd_str = "TST:05 "
        num_str = str(num)
        cmd_str += "0"*(9 - len(num_str)) + num_str+'\n'
        port.write(cmd_str.encode('ascii'))           