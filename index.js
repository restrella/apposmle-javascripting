// console.log('Hello World from Javascript')

// var and const

// function testFunction() {
//     // const i = 50
//     console.log('i:', i)
//     // const i = 30
//     let j = 10

//     const c = 25
//     {
//         // var k = 20
//         const c = 10
//         console.log('k:', k)
//         console.log('c:', c)
//         console.log('i:', i)
//         console.log('j:', j)
//     }
//     const k = 70
//     var i = 50
//     // c = 2
//     j = 7

//     console.log('k outside:', k)
//     console.log('c outside:', c)
//     // insideFunction()

//     // for(const/let variable of myArray) {
//     //     variable = 25
//     // }
// }

// console.log('const i:', i)

const testFunction = () => {
  for (j = 0; j < k; j++) {
    console.log("j", j, "k", k);
  }
};
// let i
// console.log('j', j)
var k = 5;
// testFunction()

const person = {
  name: "John",
  age: 20,
  walk: function () {
    console.log(this.name);
    // return 'inside walk function'
  },
};

// const attr = 'name'
// const attr = 'age'
// const attr = 'walk'
// console.log(person.name)
// console.log(person[attr]())

const firstName = "Jose";
const lastName = "Rizal";
const age = 550;

function getName() {
  // return firstName + ' ' + middleInitial + ' ' + lastName
  //   const name = `string literal: ${firstName} ${middleInitial} ${lastName}
  // Next line
  // another line`;
  const name = `http://localhost:${lastName}-${age}/sfajsdkfjaljdfsaldfja/sdfhskajh\
fskadfa/hsdfjhskajfhsakhfaksdfhaskd/hdsajkdhfksahfkjshakfjshadkf/hd\
skahfkasjhdfkjahfalkfjhaskjfhkasjdfja/hdsfkasjfhkafhaskjdhf`;

  return name;
}

const middleInitial = "P.";

// console.log(getName());

// ternary operator
// const color = "red";
const color = "green";
const myNumber = "50500hello";

// const serverNumber = 50500
//comparing number in string
// const equalNumber = serverNumber ===  Number.parseInt(myNumber)
const equalNumber = Number.parseInt(myNumber);
// const someVar = color === 'green'
// const someVar = color === 'green' & console.log('hello') & console.log('hi') & true

const firstNumber = 7;

// const testNumber = color === 'red' && firstName === 8
const testNumber = color === "red" ? 5 : 100;

// loading && (<><MyComponent></MyComponent></>)
console.log(testNumber);
