import io from './libs/socket.io.js'
import lcdRGB from './libs/lcd.js'

// lcdRGB.lcdNew("lcd1", ".outer-pcbGreen",4,20);
var socket = io('/')
var screen = new lcdRGB('lcd_1',4,20);
document.getElementsByClassName('holder')[0].appendChild(screen.screen);

socket.on('updateLCD', (data) => {
    console.log("recieved");
    screen.writeRow(data, 1);
    // lcdRGB.writeRow("lcd1", data, 1);
    console.log("updated");
})