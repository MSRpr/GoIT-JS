/*In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?
The number can be negative already, in which case no change is required.
Zero (0) can't be negative, see examples above.
*/

function makeNegative(num) {
    return (num <= 0) ? num : +('-' + num);
    console.log(makeNegative(-9));
}
console.log(makeNegative(9));

/*function makeNegative(num) {
    return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

function makeNegative(num) {
  return num > 0 ? -num : num;
}

function makeNegative(num) {
  return num <= 0 ? num : num*-1;
}
*/