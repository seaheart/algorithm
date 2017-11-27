/*
* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
* */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var longestString = ''
  var leftIndex = 0
  var currentIndex = 0
  var rightIndex = 0

  while (currentIndex < s.length) {
    leftIndex = currentIndex - 1;
    rightIndex = currentIndex + 1;

    if(leftIndex < 0 || rightIndex >= s.length){

    }

    if(s[rightIndex] === s[currentIndex]){
      leftIndex = currentIndex
    }

    while (leftIndex >= 0 && rightIndex <= s.length - 1) {
      if(s[leftIndex] === s[rightIndex]){
        if(leftIndex)
        leftIndex --;
        rightIndex ++;
      }else{
        var currentLength = rightIndex - leftIndex + 1;
        if(currentLength > longestString.length){
          longestString = s.substring(leftIndex + 1, rightIndex)
        }
        break

      }

    }

    if((leftIndex < 0 || rightIndex >= s.length))


    currentIndex ++;
  }

  return longestString

}