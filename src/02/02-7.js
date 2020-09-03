// 기존 객체 확장 표현식
var x = 0;
var y = 0;
var obj = { x: x, y: y }; // 키 이름과 키 값이 ㄷ ㅗㅇ일
var randomKeyString = "other ";
var combined = {};
combined["one" + randomKeyString] = "some value"; // 연산 결과로 키값을 대입할 키값을 지정할 코드를 추가로 작성
var obj2 = {
  x: x,
  methodA: function () {
    // 객체에 함수를 추가할 때 변수에 함수를 할당
    console.log("method A");
  },
  methodB: function () {
    return 0;
  },
};

// ES6 객체 확장 표현식

var x = 0;
var y = 0;
var obj = { x, y };
var randomKeyString = "other";
var combined = {
  ["one" + randomKeyString]: "some value",
};
var obj2 = {
  x,
  methodA() {
    console.log("method A");
  },
  methodB() {
    return 0;
  },
};

// 기존 구조 분해 사용 방법
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;
var temp = item2;
item2 = item1;
item1 = temp;
var obj = {
  key1: "one",
  key2: "two",
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || "default key3 value";
var newKey1 = obj.key1;

// ES6 구조 분해 할당
var list = [0, 1];
var { item1, item2, item3 = -1 } = list;
[item2, item1] = [item1, item2];
var obj = {
  key1: "one",
  key2: "two",
};
var { key1: newKey1, key2, key3 = "default key3 value" } = obj;

// 함수 인잣값을 다루거나 JSON 데이터를 변환할 때 유용하게 사용된다.
