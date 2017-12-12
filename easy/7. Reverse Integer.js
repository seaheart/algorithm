/*
* Given a 32-bit signed integer, reverse digits of an integer.
* Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
* */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var returnArr = []
  if(x > 0){
    returnArr.push('+')
  }else if(x < 0){
    returnArr.push('-')
  }else{
    return 0
  }

  x = Math.abs(x)
  while(x !== 0){
    if(returnArr.length > 1 || x % 10 !== 0){
      returnArr.push(x % 10)
    }
    x = parseInt(x/10)
  }

  var returnNum = parseInt(returnArr.join(''));
  if(returnNum < -Math.pow(2,31) || returnNum > Math.pow(2,31)){
    return 0
  }

  return returnNum
};