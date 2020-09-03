// 화살표 함수

// 유명함수
function add(first, second) {
  return first + second;
}
// typeof add === 'function'

// 익명함수
var add1 = function (first, second) {
  return first + second;
};
// typeof add === 'function'

// ES6
var add2 = (first, second) => {
  return first + second;
};
var add3 = (first, second) => first + second;
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

// 화살표 함수는 함수 표현식을 간결하게 할 수 있고, 이후 배우게 될 커링(currying)과
// 같은 디자인 패턴에서 사용되는 함수를 반환할 때 '계단형 함수 선언'과 같은 구조가 만들어지지 않게 해준다.

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

var addNumber1 = (num) => (value) => num + value;

// 콜백함수의 this범위로 생기는 오류를 피하기 위해 bind()함수를 사용한다.
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
// addThis3은 bind()함수로 this범위 유지를 하지 않아도 된다.
