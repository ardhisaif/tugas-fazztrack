# Javascript Introduction Learning list
### 1. **Using variable** => let & const
### 2. **Primitive data type :** string, integer, boolean, null, undefined
### 3. **Non Primitive data type :** arr[], obj{}
### 4. **Comparison operators :** 
    - Equal value ( == )
    - Equal value And type ( === )
    - Not equal ( != )
    - Not equal value and type ( !== )
    - Greater than ( > )
    - Less than ( < )
    - Greater than or equal ( >= )
    - Less than or equal ( <= )

### 5. **Condition :**
```js

//if-else
let num 5
if(num < 10){
    console.log(true)
}else{
    console.log(false)
}
```
```js
//switch-case
switch(num) {
  case 4:
    console.log("four")
    break;
  case 5:
    console.log("five")
    break;
  default:
    console.log("default")
}
```
```js
//ternary operator
const age = 23
const isAdult = age >= 23 ? "adult": "kids"
console.log(isAdult)//adult
```
```js
//short logic
var person = {
  name: 'Jack',
  age: 34
}
console.log(person.job || 'unemployed');
// 'unemployed'

var person = {
  name: 'Jack',
  age: 34,
  job: 'teacher'
}
console.log(person.job || 'unemployed');
// teacher
```

### 6. Looping
```js
//for-loop
for(let i = 0 ; i < 10 ; i++ ){
    console.log(i)
}
```
```js
//while-loop
let i = 0
while(i < 10){
    console.log(i)
}
```
```js
//do-while
let i = 0
do{
    console.log(i)
    i++
}while(i < 10)
```

### 7. String Literals
- use backtick ``
```js
let nama = "john"
console.log(`my name ${name}`)
```

### 8. Spread Operator
**to copy arr/obj and merge arr/obj**
```js
//arr
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
```

```js
//obj
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

### 9. Destructuring

```js
//arr
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);

// red, yellow
```

```js
//obj
const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
console.log(frontend, backend);

// React, Node
```


