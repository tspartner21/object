/*
new 생성자함수() --> 인스턴스라는 공통의 틀을 가지고 있는 복사본 객체를 대량 생산 가능
각각의 인스턴스들을 메서드라는 특정 함수를 공유하면서 자유롭게 호출 가능
인스턴스라는 복사본 객체를 생성해서 작업하는 프로그래밍 방법론 : 객체지향 프로그래밍
객체지향 프로그래밍을 쓰는 이유 : 동일한 구조의 객체를 안전하게 생성해서 쓰기 위함, 반복되는 함수를 인스턴스별로 적용해서 재활용하기 위함
*/

//ES5 객체지향
function Student(props) {
  this.name = props.name;
  this.age = props.age;
}

Student.prototype.inform = function () {
  console.log('My name is' + this.name + '! ' + ' I am ' + this.age + ' years old');
}

//new 연산자로 생성자로부터 동일한 틀을 가지고 있는 복사본 객체인 인스턴스를 생성
const instance = new Student({ name: 'David', age: 28 });
//복사가 된 각 개별적인 인스턴스들은 자유롭게 prototype에 접근해서 등록된 메서드를 호출가능
instance.inform();

//ES6에서부터는 위의 불편한 프로토타입 기반 객체지향 문법을 마치 JAVA의 클래스 문법을 따라해서 코드 가독성을 높임
//개발자 편의위한 sugar syntax
//현업에 가서는 기존 prototype 기반 소스를 아래와 같이 수정해야함
class _Student {
  constructor(props) { //prototype
    this.name = props.name;
    this.age = props.age;
  }

  inform() {
    //console.log('My name is ' + this.name + '! ' + ' I am ' + this.age + ' years old');
    //template literal '문자열 안에 변수를 삽입하기 위한 ES6전용의 템플릿 문법'
    //백틱을 사용한다!!
    console.log(`[백틱] My Name is ${this.name}. and ${this.age} years old.`);
  }
}

const instance2 = new _Student({ name: 'Emily', age: 20 });
instance2.inform();