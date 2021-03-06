/*
* Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
* */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var modelX = x
  var t = 0
  while(modelX > 0){
    t = t * 10 + modelX % 10
    modelX = parseInt(modelX / 10)
  }
  return t === x ? true : false
};