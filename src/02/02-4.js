// 가변 변수
let num = 1;
num = num * 3;
let str = "문자";
str = "다른 문자";
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: "새 객체" };

// 불변 변수
const num1 = 1;
num1 = 3; // 오류
const str1 = "문자";
str1 = "새 문자"; // 오류
const arr1 = [];
arr1 = [1, 2, 3]; // 오류
const obj1 = 1;
obj1 = { name: "내 이름" }; // 오류

// 불변 변수는 값을 다시 할당할 수 없는것이지 값을 변경할 수는 있다.
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1]
arr2.pop(); // arr2 = [1]
const obj2 = {};
obj2["name"] = "내이름"; // obj2 = {name: '내이름}
Object.assign(obj2, { name: "새이름" }); //obj2 = {name: '새이름'}
delete obj2.name; // obj2 = {}

// 불변 변수의 값을 변경하는 것 => 무결성 제약 조건에 위배
// -> 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성 유지
// 무결성을 유지하면서 불변 변수의 값을 수정해야 하는 경우 => 수정할 불변 변수를 새로 만들어 새값을 할당
const num3 = 1;
const num4 = num3 * 3;
const str3 = "문자";
const str4 = str3 + "추가";
const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
const [first, ...arr7] = arr5;
const obj3 = { name: "내이름", age: 20 };
const objValue = { name: "새이름", age: obj3.age };
const obj4 = { ...obj3, name: "새이름" };
const { name, ...obj5 } = obj4;

/*  가변 내장 함수 
    - push
    - splice
    - pop
    - shift

    무결성 내장 함수
    - concat
    - slice(0, s).concat(...items, slice(s+c))
    - slice(0, len-1)
    - slice(1)
*/
