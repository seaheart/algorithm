/*
* Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
* */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var maxLength = 0;
    var pointFirst = 0;
    var pointSecond = 0;

    while (pointSecond < s.length - 1) {
        pointSecond++;
        for (var i = pointFirst; i < pointSecond; i++) {
            if (s[i] === s[pointSecond]) {
                if (pointSecond - pointFirst > maxLength) {
                    maxLength = pointSecond - pointFirst
                }
                pointFirst = i + 1;
                break
            }
        }
    }

    if (pointSecond === s.length - 1 && pointSecond - pointFirst + 1 > maxLength) {
        maxLength = pointSecond - pointFirst + 1
    }


    return maxLength
};