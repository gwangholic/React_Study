// 디바운스
// - 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을
//   바탕으로 서버 요청을 하는 방식
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
const run = debounce((val) => console.log(val), 100);
run("a");
run("b");
run(2);
// 100ms 이후
// 2
