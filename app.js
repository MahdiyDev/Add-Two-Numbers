/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newl1 = [];
  let newl2 = [];
  let newSum = [];
  let i = l1.length;
  let j = l2.length;
  for (i > 0; i--; ) {
    newl1.push(l1[i]);
  }
  for (j > 0; j--; ) {
    newl2.push(l2[j]);
  }
  let sum = parseInt(newl1.join("")) + parseInt(newl2.join(""));
  sum = sum.toString();
  let s = sum.length;
  for (s > 0; s--; ) {
    newSum.push(parseInt(sum[s]));
  }
  return newSum;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

addTwoNumbers([2, 4, 3], [5, 6, 4]);
