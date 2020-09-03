// 배열 함수
function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = qs.split("&");
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    var key = parts[0]; // key = 'banana'
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); // value = '10'
    result[key] = value; // result = {banana: '10'}
  }
  return result;
}

// ES6 forEach() 함수 사용
function parse1(qs) {
  const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = qs.split("&");
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split("=");
    result[key] = value; // result = {banana: '10'}
  });
  return result;
}

// ES6 map() 함수 사용
// 각 배열의 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환
// => 배열을 가공해서 새 배열을 만듬
// forEach는 가변변수를 사용해야함
function parse2(qs) {
  const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = qs.split("&");
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split("=");
    return { key: key, value: value };
  });
}

// reduce() 함수 사용
// 배열을 객체로 반환하고 싶을때 사용
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0); // 첫번째 인자: 변환함수, 두번째 인자: 초깃값
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
// 실무에서는 배열을 특정 자료형으로 변환하는 데 사용. 위 예제는 배열을 숫자로 변환한 예제로 이해

// map으로 배열을 반환하고 reduce로 객체를 반환
function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split("&");
  const result = chunks
    .map((chunk) => {
      const [key, value] = chunk.split("=");
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
