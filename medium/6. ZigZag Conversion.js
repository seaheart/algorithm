/*
*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
* */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


var convert = function(s, numRows) {
  if(numRows === 1) return s

  var rows = new Array(numRows)
  var dynamicIndexArr = new Array(numRows)
  var mediumLength = numRows - 2

  for(var i = 0; i < s.length; i++){
    if(i < numRows){
      rows[i] = s[i]
      dynamicIndexArr[i] = i
    }else{
      for(var j = 0; j < dynamicIndexArr.length; j++){
        if((i + dynamicIndexArr[j]) % (mediumLength + numRows) === 0){
          rows[j] += s[i]
          dynamicIndexArr[j] = i
          break
        }
      }
    }
  }

  return rows.join('')
};