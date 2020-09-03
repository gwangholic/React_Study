// 전개 연산자 (spread operator)
var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = [array1[0], array1[2], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || "empty";
function func() {
  var args = Array.prototype.slice.call(this.arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
}

// 배열 내장함수를 일일이 기억해야 하고 코드가 길어서 불편함 => 전개 연산자 이용
var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = [...array1, ...array2];
// 결과 combined = ['one', 'two', 'three', 'four']
var [first, second, three = "empty", ...others] = array1;
function func2(...args) {
  var [first, ...others] = args;
}
