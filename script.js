
//객체의 property key에 함수도 등록 가능! 굿... 완전 좋음
const student2 = {
  name: 'Julia',
  age: 23,
  isFemale: true,
  inform: () => {
    console.log(`이름 : ${student2.name} 의 나이는 ${student2.age + 1}입니다`)
  },
  whoareyou: function () {
    console.log(`이름 : ${student2.name} 의 나이는 ${student2.age + 1}입니다`)
  }
};
console.log(student2.inform());

//객체안에 등록되어 있는 함수를 메서드(prototype에 등록된 함수 : 메서드)
//자바스크립트에서는 이처럼 객체 property에 등록가능하거나 함수의 인수로 전달가능하거나
//변수에 대입할수있는 함수를 일급객체
student2.inform();
//student2.whoareyou();