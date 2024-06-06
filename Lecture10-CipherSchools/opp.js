// let person={
//     firstNmae:"Shantanu",
//     lastName:"Shubham",
//     getFullName: function(){
//         return `The name of the person is ${person.firstNmae} ${person.lastName}`;
//     },

//     phoneNumber:{
//         mobile:"12345",
//         landline:"6789"
//     }
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);


// function person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

// let person1=new person("Shantanu","Shubham");
// let person2=new person("Anurag","Mishra");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);


// const coder={
//     isStudying:false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am i studying? ${this.isStudying}`);
//     },
// };

// const me= Object.create(coder);
// me.name="Shantanu Shubham";
// me.isStudying=true;

// me.printIntroduction();

// class Vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }

//     getDetails(){
//         return `The name of the vehicle is ${this.name}`;
//     }
// }

// let v1=new Vehicle("creta","Hyundai","2500cc");
// let v2=new Vehicle("Q5","Audi","3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


// function Vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }

// Vehicle.prototype.getDetails= function(){
//     return `The name of the model is ${this.name}`;
// }

// let v1=new Vehicle("creta","Hyundai","2500cc");
// let v2=new Vehicle("Q5","Audi","3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// class Person{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
//     addAddress(newAddress){
//         this.address=newAddress;
//     }

//     getDetails(){
//         console.log(`Name is ${this.name} and address is ${this.address}`);
//     }
// }

// let person1=new Person("Shantanu",241);
// person1.addAddress("kokata");
// person1.getDetails();

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         let getDetails_NoAccess= function(){
//             return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//         };
//     this.getDetails_Access=function (){
//          return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//     }
//     }

   
// }
// function Person(firstName,lastName){
    
//         this.firstName=firstName;
//         this.lastName=lastName;
//         let getDetails_NoAccess= function(){
//             return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//         };
//     this.getDetails_Access=function (){
//          return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
//     }
    

   
// }

// let person1=new Person("Shantanu","Shubham");
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.getDetails_NoAccess());
// console.log(person1.getDetails_Access());


class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getDetails=function (){
        return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
   }
}

class Student extends Person{
    constructor(firstName,lastName,rollNumber){
        super(firstName,lastName);
        this.rollNumber=rollNumber;
    }

    getDetails=function (){
       
        return `First name is: ${this.firstName} and last name is: ${this.lastName} and the roll number is ${this.rollNumber}`;
   }
}

let person1=new Person("Shantanu","Shubham");
console.log(person1.firstName);
console.log(person1.getDetails());

let student1=new Student("Anurag", "Mishra",20)
console.log(student1.getDetails());