from .lcd_handler import lcd_handler
from .shared_vars import keyCode_confirmation

def process_serial_input(input_str) :
    code_type = input_str[:3]

    match code_type :
        case 'LCD' :
            code_sub_type = input_str[4]
            match code_sub_type :

                # Display off, on, clear 
                case 'D' :
                    code = input_str[5:7]

                    # Display off 
                    if   (code == '00') :
                        lcd_handler.display_off()

                    # Display on
                    elif (code == '01') :
                        lcd_handler.display_on()

                    # Clear display
                    elif (code == '02') :
                        lcd_handler.clear_display()

                # Print stuff on lcd 
                case 'P' :
                    code = input_str[5:7]
                    match code :

                        #PrintString 
                        case '00' :
                            row = int(input_str[8:11])
                            if (row < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                col = int(input_str[12:15])
                                string = ' '*col + input_str[16:]
                                if (len(string) <= lcd_handler.LCD_LINE_SIZE) :
                                    string += (lcd_handler.LCD_LINE_SIZE - len(string)) * ' ' 
                                    lcd_handler.update_line(row, string)
                                else :
                                    lcd_handler.update_line(row, string[:lcd_handler.LCD_LINE_SIZE])

                        #PrintStringNoSpace
                        case '01' :
                            row = int(input_str[8:11])
                            if (row < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                col = int(input_str[12:15])
                                string = input_str[16:]
                                if (len(string) + col <= lcd_handler.LCD_LINE_SIZE) :
                                    for a in range (col, len(string)+col) :
                                        lcd_handler.update_char(row, a, string[a-col])
                                else : 
                                    for a in range (col, lcd_handler.LCD_LINE_SIZE) :
                                        lcd_handler.update_char(row, a, string[a-col])                                

                        #PrintString2Lines 
                        case '02' :
                            row = int(input_str[8:11])
                            if (row < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                col = int(input_str[12:15])
                                indent = int(input_str[16:19])
                                string = input_str[20:].split('\n')
                                a = f"LCD P00 {row:03d} {col:03d} {string[0]}"
                                b = f"LCD P00 {row+1:03d} {indent:03d} {string[1]}"
                                process_serial_input(a)
                                process_serial_input(b)

                        #PrintStringCentred
                        case '03' :                            
                            row = int(input_str[8:11])
                            if (row < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                string = input_str[12:]
                                if (len(string) <= lcd_handler.LCD_LINE_SIZE) :
                                    string = int((lcd_handler.LCD_LINE_SIZE - len(string))/ 2) * ' ' + string
                                    string += (lcd_handler.LCD_LINE_SIZE - len(string)) * ' '
                                    lcd_handler.update_line(row, string)
                                else :
                                    lcd_handler.update_line(row, string[:20])
                            
                        #PrintStringRight
                        case '04' :                            
                            row = int(input_str[8:11])
                            if (row < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                string = input_str[12:]
                                if (len(string) <= lcd_handler.LCD_LINE_SIZE) :
                                    string = (lcd_handler.LCD_LINE_SIZE-len(string))*' ' + string
                                    lcd_handler.update_line(row, string)
                                else :
                                    lcd_handler.update_line(row, string[:20])

                        #PrintRow
                        case '05' :
                            row = int(input_str[8:11])
                            if (int(row) < lcd_handler.MAX_NUMBER_OF_LCD_LINES) :
                                string = input_str[12:]
                                lcd_handler.update_line(row, string)

        # KeyProcessed conformation
        case 'KEY' :
            code_sub_type = input_str[4:7]
            match code_sub_type :
                case 'PRO' :
                    keyCode_rec = int(input_str[8:])
                    if (keyCode_confirmation.len_sent_keyCodes > 0) :
                        if (keyCode_confirmation.sent_keyCodes[0] == keyCode_rec) :
                            keyCode_confirmation.sent_keyCodes.pop(0)
                            keyCode_confirmation.len_sent_keyCodes -= 1
                        else :
                            print(keyCode_confirmation.sent_keyCodes)
                            print("Key code mismatch, expected: ", keyCode_confirmation.sent_keyCodes[0], "received: ", keyCode_rec)
                    else :
                        print("No key code to compare with, received: ", keyCode_rec)
                    
                    
        # Debug statements
        case 'DEB' :
            print(input_str)