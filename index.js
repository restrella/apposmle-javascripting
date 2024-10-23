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

// const person = {
//   name: "John",
//   age: 20,
//   walk: function () {
//     console.log(this.name);
//     // return 'inside walk function'
//   },
// };

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

// truthy
// string
// non-zero number
// true
// any object {}
// []


// falsy
// ""
// 0
// false
// null
// undefined
// NaN

const myVar = null

// const newValue = null ?? 'hello' // null undefined
// const newValue = [].length > 0 ? 'hello1' : 'hello2' // truthy falsy
// const newValue = Object.keys({}).length > 0 ? 'hello1' : 'hello2' // truthy falsy
// console.log(newValue)

const person2 = {
  name:'John',
  walk:()=> {
    // setTimeout(function(){console.log(`${this.name} is walking new...`)}, 3000)
    // var self = this
    // setTimeout(function(){console.log(`${self.name} is walking new...`)}, 3000)
    
    // setTimeout(() => {console.log(`${this.name} is walking new...`)}, 3000)
    console.log(`${this.name} is walking...`)
  }
}

// person2.walk()
// this.name = ''
// const w = person2.walk.bind(person2)
// w() 

// arrays

// const tags = ['tag1', 'tag2', 'tag3']

// const updatedTags = tags.filter(tag => tag.includes('1'))
// // console.log(updatedTags)
// console.log(updatedTags[0])

// const updatedTags = tags.find(tag => tag.includes('1'))
// console.log(updatedTags)


const tags = [
  {id: 1, value:'tag1'},
  {id: 2, value:'tag2'},
  {id: 3, value:'tag3'},
]
// const updatedTags = tags.find(tag => tag.value.includes('1'))
// console.log(updatedTags)

// delete - pessimistic update, optimistic update
// const deleteTagById = (id) =>  tags.filter(tag => tag.id !== id)
// const newTags = deleteTagById(3)

// const updatedTags = tags.map(tag => `my tag: ${tag.value}`)
// const updatedTags = tags.map(tag => `<li>${tag.value}</li>`)
// const updatedTags = tags.map((tag, index)=> index % 2 === 0 ? `<li>${tag.value}</li>`:`black`)
// console.log(updatedTags)

// destructuring

const address = {
  city: 'Pasig',
  region: 'NCR',
  street: 'Springs st.'
}

// const city = address.city
// const region = address.region
// const street = address.street

// const city = 'Davao City'
// const {city:cityValueOfObject, region} = address

// console.log(city)
// console.log(cityValueOfObject)

// const logAddress = ({city:cty, region, street}) => {
//   // const {city, region, street} = address
//   // console.log(`My city is: ${address.city}`)
//   console.log(`My city is: ${cty}`)
//   console.log(`My region is: ${region}`)
//   console.log(`My street is: ${street}`)
// }

// logAddress(address)

const numbers = [1, 2, 3]
const numbersAgain = [4,5,6]

// const combine = numbers + numbersAgain
// const combine = numbers.concat(7).concat(numbersAgain)


// const combine1 = [...numbers,7,...numbersAgain]
// console.log(combine1)

// const l = [1,2,3]
// // const b = l

// // const b = Object.assign({}, l)
// const b = [...l]

// delete b[0]
// b[1] = 'newt'

// console.log(b)
// console.log(l)

// spread operator on object
const person = {
  id:3,
  name:'jayson monroe'
}

const personDetails = {
  // id:3,
  age:21
}

// const combi = {...person, location:'Sampaloc',...personDetails}
// combi.gender = 'Male'
// console.log(combi)

const {city, ...restProperties} = address

// console.log('rest', restProperties)

const logPerson = ({id, ...otherDetails}) => {
  console.log(otherDetails)
}

// logPerson(person)

class Person {
  constructor(name) {
    this.name = name
  }
  walk() {
    console.log(`${this.name} is walking`)
  }
}

const p = new Person("James")
p.walk()


class Trainer extends Person {
  constructor(name, topic) {
    super(name)
    this.topic = topic
  }
  train() {
    console.log(`${this.name} is training ${this.topic}`)
  }
}

const trainor = new Trainer("Jose", "Karate")
// trainor.train()

// named export, default export

export const name = 'Jake Jones'

export default "Defalt Jake Joson"

export function login() {
  console.log('export logging in...')
}
export function register() {
  console.log('export registering in...')
}
export function logout() {
  console.log('export logging out...')
}