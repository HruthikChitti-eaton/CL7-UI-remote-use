from TST.tst_05 import tst_05

class tst :
    def init(socketio, port, base):
        tst.socketio = socketio
        tst.base = base 

        tst_05.init(port)
        tst.socketio.on_namespace(tst_05(tst.base + '/tst_05'))