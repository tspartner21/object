//구조 분해 할당, 비구조화 할당(Destructuring Assignment)

const colors = ['red', 'blue', 'green', 'blue'];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];

//const [c1, c2, c3] = ['hotpink', 'aqua', 'violet'];
const myFavoraitColor = ['hotpink', 'aqua', 'violet'];
const [c1, c2, c3] = myFavoraitColor;
console.log(c3);

const _student1 = {
  name: 'Andy',
  age: 30,
  address: 'Seoul'
};

const { name: name1, age, address } = _student1;
console.log({ name1 });
console.log(age);
console.log(address);