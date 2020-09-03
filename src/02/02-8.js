// ES6 라이브러리 의존성 관리
import MyModule from "./MyModule.js";
import { ModuleName } from "./MyModule.js";
import { ModuleName as RenameModuleName } from "./MyModule.js";
function Func() {
  MyModule();
}
export const CONST_VALUE = 0;
export class MyClass {}
export default new Func();
