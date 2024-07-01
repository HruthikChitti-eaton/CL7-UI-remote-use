from CL7_auto import init, send_key, wait_till_processed, get_text_on_display, free_port


# Initializing the comm port (and server, if init_server = True)
init(19200, 'COM5')


if 1:

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

    if(wait_till_processed()) :
        print("Success")
    else :
        print("Something went wrong")

print(get_text_on_display())
# input('Press any key to exit')

free_port()