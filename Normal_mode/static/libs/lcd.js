
class lcd {
  static check_performance = false;
  static letterData =  {
' ': [[false, false, false, false, false],
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
  [false, false, false, false, false],],
'block' :[[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],
[true, true, true, true, true],]}

  constructor(rows, columns){
    this.rows = rows
    this.columns = columns
    let screen = document.createElement('div');
    screen.classList.add('lcdscreen');
    screen.style.width = (columns*14.5)+'px';
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

  async write_char(char, ele){
    let data = lcd.letterData[char]
    if (data === undefined){
      data = lcd.letterData.block
    }
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

  update_line(row, string){
    console.log(row)
    console.log(string)
    let chars = string.split('');
    let rem = this.columns - chars.length;
    if (rem > 0){
      for (let a = 0 ; a < rem ; a++)
        chars.push(' ');
    }
    else{
      chars = string.slice(0, this.columns)
    }
    let rowEle = this.screen.getElementsByClassName('LCDRow')[row];
    let letters = rowEle.getElementsByClassName('letter');
    if (lcd.check_performance){
      const promises = [];
      const prev = performance.now();
      for (let a = 0 ; a < this.columns ; a++){
        promises.push(this.write_char(chars[a], letters[a]));
      }
      Promise.all(promises)
        .then(()=>{
          console.log(performance.now()-prev);
      })
    }
    else{
      for(let a = 0 ; a < this.columns ; a++){
        this.write_char(chars[a], letters[a]);
      }
    }
  }

  update_char(row, column, char){
    this.write_char(char, this.screen.getElementsByClassName('LCDRow')[row].getElementsByClassName('letter')[column]);
  }

  clear_screen(){
    for (let a = 0 ; a < this.rows ; a++){
      this.update_line(a, " ");
    }
  }

  back_light_on(){
    this.screen.style.backgroundColor = '#8fe0d1';
  }
  
  back_light_off(){
    this.screen.style.backgroundColor = '#3f772d';
  }

}

export default lcd;