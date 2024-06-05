
// var x=15;

// {
//     let x=5;
//     console.log(x);
//     const y=6;
//     console.log(y);
//     // let x=15;
// }
// var x=24;
// console.log(x);

// arrow function
// var x= function(x,y){
//     return x+y;
// };

// var y=(x,y)=>{
//     return x+y;
// };
// or

// const y=(x,y)=> x+y;

// console.log(x(5,6));
// console.log(y(5,6));

// spread operator
// const q1=["Jan","Feb","Mar"];
// const q2=["Apr","May","JUn"];
// const q3=["Jul","Aug","Sep"];
// const q4=["Oct","Nov","Dec"];

// const year=[...q1,...q2,...q3,...q4];

// console.log(year);

// const myNumbers=[25,12,50,77,-1];

// let maxValue=Math.max(...myNumbers);
// console.log(maxValue);
// const name = "CipherSchools"
// // let sum=0;
// let text="";
// for(let ch of name){
//     text+=ch+" ";
// }
// console.log(text);


//maps
// const fruits = new Map([["apples",500],["banana",300],["oranges",200]]);
// console.log(fruits);
// console.log(fruits.get("oranges"));

//sets
// const letters=new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");
// console.log(letters);

//classes
// class Car{
//     constructor(name,mfgYear){
//         this.name=name;
//         this.mfgYear=mfgYear;
//     }
// }
// const myCa1r= new Car("Mercedes",2022);
// const myCar2= new Car("Porsche",2020);
// console.log(myCa1r);
// console.log(myCar2);

//promises

// const myFunction=()=> {
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is inside a promise");
//         resolve();
//     },2000);
// }
// )};

// myFunction().then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.error("Rejected");
// })

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:30,
//     eyeColor:"blue"
// };
// let id=Symbol("id");
// person[id]=140111;
// console.log(person);

// const addTwoNumbers=(a,b=15)=>a+b;
// console.log(addTwoNumbers(10));

// rest parameter
const addNummbers=(...args)=>{
    // console.log(args);
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}

console.log(addNummbers(10,20,34,56,78,90,77));