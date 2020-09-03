// 클래스
function Shape(x, y) {
  this.name = "Shape";
  this.move(x, y);
}
// static 함수를 선언하는 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};
// 인스턴스를 선언하는 예제
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};
// 혹은
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s = new Shape(0, 0);
s.area();
// new Shape(0, 0)으로 함수를 호출하면 this 객체에 해당하는 변수 및 함수가 prototype 객체에 선언된 변수와 함수를 함께 참조한다.

// 자식클래스 생성
function Circle(x, y, radius) {
  Shape.call(this, x, y); // 부모의 생성자 호출하여 초깃값을 상속 받음
  this.name = "Circle";
  this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});
var c = new Circle(0, 0, 10);
c.area(); // 100

// ES6 변환
class Shape1 {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = "Shape";
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape1(0, 0);
s.area();

// ES6 상속
class Circle1 extends Shape1 {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}
var c = new Circle1(0, 0, 10);
c.area();
