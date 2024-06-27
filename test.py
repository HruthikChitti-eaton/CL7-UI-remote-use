from CL7_auto import init, send_key, clean_up, wait_till_processed


init(19200, 'COM5', server_port_num = 5000, init_server = True, logs = True)

send_key('keypad_esc')

# Entering function code 99
send_key('keypad_func')
send_key('keypad_9')
send_key('keypad_9')
send_key('keypad_enter')

# Entering 'admin' user name
# a 
send_key('keypad_2')

#d
send_key('keypad_3')

#m
send_key('keypad_6')

#i
send_key('keypad_4')
send_key('keypad_4')
send_key('keypad_4')

#n
send_key('keypad_6')
send_key('keypad_6')

send_key('keypad_enter')


# Entering 'Admin' user name
# A
send_key('keypad_2')
send_key('keypad_down')

#d
send_key('keypad_3')

#m
send_key('keypad_6')

#i
send_key('keypad_4')
send_key('keypad_4')
send_key('keypad_4')

#n
send_key('keypad_6')
send_key('keypad_6')

send_key('keypad_enter')

wait_till_processed()

input('Press any key to exit')

clean_up()
