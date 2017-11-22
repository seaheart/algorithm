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
    var firstArr = [], secArr = [], sumArr = [];
    do {
        firstArr.push(l1.val)
        l1 = l1.next
    } while (l1);

    do {
        secArr.push(l2.val)
        l2 = l2.next
    } while (l2);

    var inputLength = secArr.length;
    if(firstArr.length > secArr.length){
        inputLength = firstArr.length;
        for(var j = secArr.length; j < inputLength; j++){
            secArr[j] = 0
        }
    }else{
        for(var k = firstArr.length; k < inputLength; k++){
            firstArr[k] = 0
        }
    }

    for(var i = 0; i < inputLength; i++){
        sumArr[i] = firstArr[i] + secArr[i]
    }

    sumArr.forEach(function (t,index) {
        if(t >= 10){
            if(index !== sumArr.length - 1){
                sumArr[index + 1] = sumArr[index + 1] + 1;
            }else{
                sumArr[index + 1] = 1
            }
            sumArr[index] = t - 10
        }
        return
    });

    return sumArr
}
