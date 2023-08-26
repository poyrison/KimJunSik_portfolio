var userName = "김준식";
var animal = "호랑이";
var member = ["kim"]; // 문자만 담긴 array만 가능
var members = {
    member1: "kim",
    member2: "park",
};
var myInfo = {
    myName: "김준식",
    myAge: 26,
    myHometown: "인천",
};
var project = {
    member: ["kim", "park", 2],
    days: 30,
    started: true,
};
var school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
// readonly
// 함수에 타입 지정
function add(x) {
    // 엄격한 타입 설정
    return x + 2;
}
// add('name') // number타입이 아니기 때문에 오류 발생
add(3);
// 변수? :number == 변수 : number | undefined;
function 함수(x) {
    // console.log(x + 1); // 에러가 나는 이유는 유니온 타입으로 지정되어있기 때문이다.
    if (typeof x === "number") {
        // 어떤 변수의 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능하다.
        console.log(x * 2);
    }
    // assertion문법(타입 덮어쓰기)
    var array = [];
    array[0] = x;
    // 1. Narrowing 할 때 사용
    // 2. a(number)에서 b(string)타입으로 변경하면 에러 발생
    // 3. 무슨 타입이 들어올지 100% 확실할 때 사용
}
var position = { x: 10, y: 20 };
var UserInfo = /** @class */ (function () {
    function UserInfo(name) {
        this.name = name;
    }
    return UserInfo;
}());
var 회원가입정보 = {
    name: "kim",
    adult: false,
    phone: 1234,
};
var func = function (x) {
    return x;
};
func(["가위", "바위"]);
// ==================================================================
var 회원정보 = {
    name: "kim",
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(2);
var cutZero = function (x) {
    var result = x.replace(/^0/g, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
// console.log(cutZero("spicy"));
// console.log(removeDash("010-9201-9722"));
// ==================================================================
var Person = /** @class */ (function () {
    function Person(a) {
        this.data = a;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
Person.prototype.함수 = function () { };
var person1 = new Person("하이");
var person2 = new Person(3);
// console.log(person1);
// console.log(person2);
// person1.함수("안녕");
// ==================================================================
var CarPrice = /** @class */ (function () {
    function CarPrice(a, b) {
        this.model = a;
        this.price = b;
    }
    CarPrice.prototype.tax = function () {
        return (this.price * 0.07).toFixed(); // 소수점 제거
    };
    return CarPrice;
}());
var car1 = new CarPrice("소나타", 3500);
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var num = [];
        var str = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                str.push(i);
            }
            else {
                num.push(i);
            }
        });
        this.num = num;
        this.str = str;
    }
    return Word;
}());
// & 기호(intersection type)는 두 타입을 전부 막족하는 타입이라는 뜻
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
