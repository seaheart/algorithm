/*
*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
* */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {
  var firstStr = '', secStr = ''
  do {
    firstStr += l1.var
  } while (l1.next)

  do {
    secStr += l2.var
  } while (l2.next)

  var firstNum = parseInt(firstStr.reverse())
  var secNum = parseInt(secStr.reverse())
  var sumNum = firstNum + secNum
  var sumStr = sumNum.toString().reverse()

  var returnStr = {}
  toLinkedList(returnStr,sumStr)
  return returnStr
}

var toLinkedList = function (returnStr, str) {
  if (str) {
    returnStr.val = str.
  } else {
    returnStr.next = null
  }
}