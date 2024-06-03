class lcdRGB {

  static letterData =  {' ': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'!': [[false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'"': [[false, true, false, true, false],
  [false, true, false, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'#': [[false, true, false, true, false],
  [false, true, false, true, false],
  [true, true, true, true, true],
  [false, true, false, true, false],
  [true, true, true, true, true],
  [false, true, false, true, false],
  [false, true, false, true, false],
  [false, false, false, false, false]],
'$': [[false, false, true, false, false],
  [false, true, true, true, true],
  [true, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, true],
  [true, true, true, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'%': [[true, true, false, false, false],
  [true, true, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, false, false, true, true],
  [false, false, false, true, true],
  [false, false, false, false, false]],
'&': [[false, true, true, false, false],
  [true, false, false, true, false],
  [true, false, true, false, false],
  [false, true, false, false, false],
  [true, false, true, false, true],
  [true, false, false, true, false],
  [false, true, true, false, true],
  [false, false, false, false, false]],
"'": [[false, true, true, false, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'(': [[false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, false, true, false, false],
  [false, false, false, true, false],
  [false, false, false, false, false]],
')': [[false, true, false, false, false],
  [false, false, true, false, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false]],
'*': [[false, false, false, false, false],
  [false, false, true, false, false],
  [true, false, true, false, true],
  [false, true, true, true, false],
  [true, false, true, false, true],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'+': [[false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [true, true, true, true, true],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
',': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, false, false],
  [false, false, true, false, false],
  [false, true, false, false, false]],
'-': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'.': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, false, false],
  [false, true, true, false, false]],
'/': [[false, false, false, false, false],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'0': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, true, true],
  [true, false, true, false, true],
  [true, true, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'1': [[false, false, true, false, false],
  [false, true, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'2': [[false, true, true, true, false],
  [true, false, false, false, true],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]],
'3': [[true, true, true, true, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, false, false, true, false],
  [false, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'4': [[false, false, false, true, false],
  [false, false, true, true, false],
  [false, true, false, true, false],
  [true, false, false, true, false],
  [true, true, true, true, true],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, false, false]],
'5': [[true, true, true, true, true],
  [true, false, false, false, false],
  [true, true, true, true, false],
  [false, false, false, false, true],
  [false, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'6': [[false, false, true, true, false],
  [false, true, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'7': [[true, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false]],
'8': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'9': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, true, true, false, false],
  [false, false, false, false, false]],
':': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'<': [[false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, false, false, false, false],
  [false, true, false, false, false],
  [false, false, true, false, false],
  [false, false, false, true, false],
  [false, false, false, false, false]],
'=': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'>': [[false, true, false, false, false],
  [false, false, true, false, false],
  [false, false, false, true, false],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false]],
'?': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'@': [[false, true, true, true, false],
  [true, false, false, false, true],
  [false, false, false, false, true],
  [false, true, true, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'A': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'B': [[true, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [false, false, false, false, false]],
'C': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'D': [[true, true, true, false, false],
  [true, false, false, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, true, false],
  [true, true, true, false, false],
  [false, false, false, false, false]],
'E': [[true, true, true, true, true],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]],
'F': [[true, true, true, true, true],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [false, false, false, false, false]],
'G': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, false],
  [true, false, true, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, false]],
'H': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'I': [[false, true, true, true, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'J': [[false, false, true, true, true],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [true, false, false, true, false],
  [false, true, true, false, false],
  [false, false, false, false, false]],
'K': [[true, false, false, false, true],
  [true, false, false, true, false],
  [true, false, true, false, false],
  [true, true, false, false, false],
  [true, false, true, false, false],
  [true, false, false, true, false],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'L': [[true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]],
'M': [[true, false, false, false, true],
  [true, true, false, true, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'N': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, false, false, true],
  [true, false, true, false, true],
  [true, false, false, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'O': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'P': [[true, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [false, false, false, false, false]],
'Q': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, true, false, true],
  [true, false, false, true, false],
  [false, true, true, false, true],
  [false, false, false, false, false]],
'R': [[true, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [true, false, true, false, false],
  [true, false, false, true, false],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'S': [[false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'T': [[true, true, true, true, true],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'U': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'V': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, false, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'W': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, true, false, true, true],
  [false, false, false, false, false]],
'X': [[true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, false, true, false],
  [false, false, true, false, false],
  [false, true, false, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'Y': [[true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'Z': [[true, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]],
'[': [[false, true, true, true, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
']': [[false, true, true, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'^': [[false, false, true, false, false],
  [false, true, false, true, false],
  [true, false, false, false, true],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]],
'_': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]],
'a': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, true],
  [false, true, true, true, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, false]],
'b': [[true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [false, false, false, false, false]],
'c': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'd': [[false, false, false, false, true],
  [false, false, false, false, true],
  [false, true, true, false, true],
  [true, false, false, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, false]],
'e': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'f': [[false, false, true, true, false],
  [false, true, false, false, true],
  [false, true, false, false, false],
  [true, true, true, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false]],
'g': [[false, false, false, false, false],
  [false, true, true, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'h': [[true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'i': [[false, false, true, false, false],
  [false, false, false, false, false],
  [false, true, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'j': [[false, false, false, true, false],
  [false, false, false, false, false],
  [false, false, true, true, false],
  [false, false, false, true, false],
  [false, false, false, true, false],
  [true, false, false, true, false],
  [false, true, true, false, false],
  [false, false, false, false, false]],
'k': [[true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, true, false],
  [true, false, true, false, false],
  [true, true, false, false, false],
  [true, false, true, false, false],
  [true, false, false, true, false],
  [false, false, false, false, false]],
'l': [[false, true, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'm': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, false, true, false],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'n': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'o': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'p': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, true, true, false],
  [true, false, false, false, true],
  [true, true, true, true, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [false, false, false, false, false]],
'q': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, false, true],
  [true, false, false, true, true],
  [false, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, false, true],
  [false, false, false, false, false]],
'r': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, false, false, false, false],
  [false, false, false, false, false]],
's': [[false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [true, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, true],
  [true, true, true, true, false],
  [false, false, false, false, false]],
't': [[false, true, false, false, false],
  [false, true, false, false, false],
  [true, true, true, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, true],
  [false, false, true, true, false],
  [false, false, false, false, false]],
'u': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, true, true],
  [false, true, true, false, true],
  [false, false, false, false, false]],
'v': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, false, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false]],
'w': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [false, true, false, true, false],
  [false, false, false, false, false]],
'x': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [false, true, false, true, false],
  [false, false, true, false, false],
  [false, true, false, true, false],
  [true, false, false, false, true],
  [false, false, false, false, false]],
'y': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
  [false, false, false, false, true],
  [false, true, true, true, false],
  [false, false, false, false, false]],
'z': [[false, false, false, false, false],
  [false, false, false, false, false],
  [true, true, true, true, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, true, true, true, true],
  [false, false, false, false, false]]}

  constructor(id, rows, columns){
    self.rows = rows
    self.columns = columns
    let screen = document.createElement('div');
    screen.classList.add('lcdscreen');
    screen.classList.add('pixelated');
    screen.id = id;
    for(let g = 0; g < rows; g++) {
      var rowEle = document.createElement('div');
      rowEle.classList.add('LCDRow');
      for(var h = 0; h < columns; h++) {
        let letterEle = document.createElement('div');
        letterEle.classList.add('letter');
        for (var j = 0 ; j < 8 ; j++){
          for (var i = 0 ; i < 5 ; i++){
            var pixEle = document.createElement('div');
            pixEle.classList.add('pixel');
            letterEle.append(pixEle);
          }
        }
        rowEle.appendChild(letterEle);
      }
      screen.appendChild(rowEle);
    }
    this.screen = screen;
  }

  async writeLetter(letter, ele){
    console.log(letter);
    console.log(ele);
    let data = lcdRGB.letterData[letter]
    console.log(data);
    for (var i = 0 ; i < 8 ; i++){
      for (var j = 0 ; j < 5 ; j++){
        if (data[i][j]){
          ele.children[(i*5)+(j)].classList.add('pixel-on');
        }else{
          ele.children[(i*5)+(j)].classList.remove('pixel-on');
        } 
      }
    }
  }

  writeRow(string, row){
    let chars = string.split('');
    let rem = self.columns - chars.length;
    if (rem > 0){
      for (let a = 0 ; a < rem ; a++)
        chars.push(' ');
    }
    else{
      chars = string.slice(0, self.columns)
    }
    let rowEle = document.getElementsByClassName('LCDRow')[row];
    let letters = rowEle.getElementsByClassName('letter');
    for (let a = 0 ; a < self.columns ; a++){
      this.writeLetter(chars[a], letters[a]);
    }
  }
}

export default lcdRGB;
// var lcdRGB = {
//   lcdNew: function(name, place, rows, columns) {
//     $(place).append('<div class="lcdscreen pixelated" id="'+name+'"></div>');
//     for(var g=0; g<rows; g++) {
//       var LCDRowIndex = (g+'').length == 1 ? "0" + g : g;
//       var LCDRowElement = '<div class="LCDRow" id="'+LCDRowIndex+'">';
//       $(".lcdscreen#"+name).append(LCDRowElement);
//       for(var h=0; h<columns; h++) {

//         var letterIndex = (h+'').length == 1 ? "0" + h : h;
//         var letterElement = '<div class="letter" id="'+letterIndex+'">';
//         $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow").append(letterElement);
//         for(var j=0; j<8; j++) {
//           var rowIndex = (j+'').length == 1 ? "0" + j : j;
//           var rowElement = '<div class="letter-row" id="'+rowIndex+'"></div>';
//           $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow>#"+letterIndex+".letter").append(rowElement);
//           for(var i=0; i<5; i++) {
//             var column = (i+'').length == 1 ? "0" + i : i;
//             var pixel = '<div class="pixel" id="'+column+'"></div>';
//            $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow>#"+letterIndex+".letter > #"+rowIndex+".letter-row").append(pixel);
//           }
//         }
//       }
//     }
//   },
//   writeLetter: async function (letter,row,index,lcdID) {

//     for(var i=0;i<8;i++) {
//       var charRow = (i+'').length == 1 ? "0" + i : i;
//       // var promise = new Promise(function(){
//         for(var j=0; j<5; j++) {
//           var charColumn = (j+'').length == 1 ? "0" + j : j;
//           if (letter == undefined || letter == "") 
//             letter = " ";
//           if (lcdRGB.letters[letter][i].charAt(j) == '1')
//             $("#"+lcdID+">#"+row+".LCDRow>#"+index+".letter > #"+charRow+".letter-row > #"+charColumn+".pixel").addClass("pixel-on");
//           else
//             $("#"+lcdID+">#"+row+".LCDRow>#"+index+".letter > #"+charRow+".letter-row> #" +charColumn+".pixel").removeClass("pixel-on");
//         }
//       // })

//     }
//   },

//   writeRow: async function (lcdID,string,row){
//     const characters = string.split();
//     var max = string.length;
//     row = (row+"").length == 1 ? "0"+row : row;

//     for(var i=0;i<max;i++) {
//       var charIndex  = (i+"").length == 1 ? "0"+i : i;
      
//       // let promise = new Promise(function(){

//       lcdRGB.writeLetter(string.charAt(i),row,charIndex, lcdID)
//       // })
//     }
//   },
//   rotateRow: function (lcdID,string,row){
//     var stringItter = string;
//     lcdRGB.writeRow(lcdID,stringItter, row);
//     stringItter = stringItter.substr(1,stringItter.length)
//     +stringItter.substr(0, 1); 
//     t = setTimeout(function () {
//       lcdRGB.rotateRow(lcdID,stringItter,row)
//     }, 500);
//   },
//   changeRGBLCDColor: function (color){
//     $(".lcdscreen").addClass("LCD-blue");

//   },
//   blink: function (state,lcdID, row, letterIndex){
//     if (state)
//       $("#"+lcdID+" > #"+row).find(">#"+letterIndex).addClass("blink");
//     else
//       $("#"+lcdID+" > #"+row).find(">#"+letterIndex).removeClass("blink");
//   },
//   addCustomLetter: function (mappingChar, pixelArray) {
//     var checkLength = function (element, index, array) {
//       return element.length == 5;
//     }
//     var passed = pixelArray.every(checkLength);
//     if (pixelArray.length == 8 && passed)
//       lcdRGB.letters[mappingChar] = pixelArray;
//   },

// };

// export default lcdRGB;