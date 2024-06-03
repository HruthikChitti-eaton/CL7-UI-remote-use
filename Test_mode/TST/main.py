from TST.tst_05 import tst_05
from com import Com 
class tst :
    @staticmethod
    def init(socketio, base):
        tst.socketio = socketio
        tst.base = base 

        if (Com.port) :
            tst_05.write_num(0)
        else :
            Com.notify_bad_config()


        tst.socketio.on_namespace(tst_05(tst.base + '/tst_05'))