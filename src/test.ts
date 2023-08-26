// 타입을 변수에 넣어서 사용할 수 있고 타입명은 보통 대문자로 시작한다.
// 이걸 type alias라고 부른다.
// type Name = string | number;
type Name = string;
type Animal = string | undefined;

let userName: Name = "김준식";
let animal: Animal = "호랑이";

let member: string[] = ["kim"]; // 문자만 담긴 array만 가능

let members: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 타입지정은 원래 자동으로 되므로 모든 곳에 타입을 지정해 줄 필요는 없다.

type MyInfoType = { myName: string; myAge: number; myHometown: string };
let myInfo: MyInfoType = {
  myName: "김준식",
  myAge: 26,
  myHometown: "인천",
};

type ProjectType = {
  member: (string | number)[];
  days: number;
  started: boolean;
};
let project: ProjectType = {
  member: ["kim", "park", 2],
  days: 30,
  started: true,
};

// union타입 unknown타입 any타입

// unknown타입이 any타입보다 안전함
// unknown타입은 연산이 적용되지 않는다. 적용되는 타입 any, number, bigint등

type SchoolType = {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
};
let school: SchoolType = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

// readonly

// 함수에 타입 지정
function add(x: number): number {
  // 엄격한 타입 설정
  return x + 2;
}
// add('name') // number타입이 아니기 때문에 오류 발생
add(3);

// 변수? :number == 변수 : number | undefined;
function 함수(x: number | string): void {
  // console.log(x + 1); // 에러가 나는 이유는 유니온 타입으로 지정되어있기 때문이다.
  if (typeof x === "number") {
    // 어떤 변수의 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능하다.
    console.log(x * 2);
  }
  // assertion문법(타입 덮어쓰기)
  let array: number[] = [];
  array[0] = x as number;
  // 1. Narrowing 할 때 사용
  // 2. a(number)에서 b(string)타입으로 변경하면 에러 발생
  // 3. 무슨 타입이 들어올지 100% 확실할 때 사용
}

// & 연산자로 object 타입 extend하기
type PositionX = { x: number };
type PositionY = { y: number };
// 같은 이름의 type 변수 재정의 불가능
// type PositionX = { x: string }; // 이미 PositionX가 정의 되어있으므로 에러 발생

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

class UserInfo {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 숙제
type User = { name: string; email?: string; phone: number };
type Adult = { adult: boolean };

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: 1234,
};

// ==================================================================

type RockPaperScissors = "가위" | "바위" | "보";
let func = (x: RockPaperScissors[]): RockPaperScissors[] => {
  return x;
};

func(["가위", "바위"]);

// ==================================================================

let 회원정보 = {
  name: "kim",
  plusOne: (x: number): number => {
    return x + 1;
  },

  changeName: (): void => {},
};

회원정보.plusOne(2);

type TypeCutType = (x: string) => string;
type RemoveDashType = (x: string) => number;

let cutZero: TypeCutType = (x) => {
  let result = x.replace(/^0/g, "");
  return result;
};

let removeDash: RemoveDashType = (x) => {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};

// console.log(cutZero("spicy"));
// console.log(removeDash("010-9201-9722"));

// ==================================================================

class Person {
  data: number | string;
  constructor(a) {
    this.data = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

Person.prototype.함수 = () => {};

let person1 = new Person("하이");
let person2 = new Person(3);

// console.log(person1);
// console.log(person2);
// person1.함수("안녕");

// ==================================================================

class CarPrice {
  model: string;
  price: number;
  constructor(a, b) {
    this.model = a;
    this.price = b;
  }
  tax() {
    return (this.price * 0.07).toFixed(); // 소수점 제거
  }
}

let car1 = new CarPrice("소나타", 3500);

// //.toLocaleString()
// console.log(`차종: ${car1.model}`);
// console.log(`가격: ${car1.price} 만원`);
// console.log(`취등록세: ${car1.tax()} 만원`);

// ==================================================================

type WordType = (number | string)[];

class Word {
  num;
  str;
  constructor(...param: WordType) {
    let num: number[] = [];
    let str: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        str.push(i);
      } else {
        num.push(i);
      }
    });

    this.num = num;
    this.str = str;
  }
}

// let obj = new Word("kim", 3, 5, "park");
// console.log(obj.num); //[3,5]
// console.log(obj.str); //['kim', 'park']

// ==================================================================
// object에 타입지정
interface Student {
  // interface 장점 extends로 복사가능
  name: string;
}
interface Teacher extends Student {
  age: number;
}
// interface는 중복선언 가능(합쳐짐) type은 중복선언 불가능
// 다른 사람이 많이 이용할 것 같으면 interface로 타입 지정
// extend쓸 때 중복속성 발생하면 에러로 잡아줌

type Animals = { name: string };
type Cat = { age: number } & Animals;
// & 기호(intersection type)는 두 타입을 전부 막족하는 타입이라는 뜻

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// ==================================================================

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
let 장바구니 = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
