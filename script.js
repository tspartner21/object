//객체 리터럴 안쪽에서의 this : window객체(전역객체)
//생성자를 통한 인스턴스를 복사하는 법
function Student(props) {
  this.name = props.name; //생성자 안쪽의 this : 해당 생성자를 통해서 앞으로 복사가될 인스턴스 객체를 지칭, (처음에는 윈도우 객체를 의미), 스키마처럼 객체 구조에 맞는 것만 저장됨
  this.age = props.age || 20;
  this.isFemale = props.isFemale;
} //함수 첫글자가 대문자인 경우, 인스턴스를 복사할 생성자함수 

Student.prototype.inform = function () {
  console.log('My Name is ' + this.name + ' and I am ' + this.age + ' years old');
}