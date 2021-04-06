// var name="Khan"

// function foo(){
//     name="Ali"

// }
// foo()
// console.log(name)


// var name="Khan"

// function foo(){
//    var name="Ali"
// }
// foo()
// console.log(name)


// if(true){
//     var name="Ali"
// }
// console.log(name)


// if(true){
//     let fullname="Ali"
// }
// console.log(fullname) //Not Print fullname


// for(var i=0;i<5;i++){
//     let FulName='Ali'
//     console.log(FulName) //print FullName
// }

// let LastName='Hussain'
// // let LastName='Ali' //Same variable(LastName) Not Allow in Let
// console.log(LastName)

// const college="National"
// var obj={
//     collegeName:college
// }
// console.log(obj)

// //Template literals
// var fname='Ali';
// var lname='Hassan'
// console.log(`My name is ${fname} ${lname}`)

// //Spread operators
// var students1=["Ali","Bilal"]
// var students2=[...students1,"Hassan","khan"]
// //concat ek mathod hai jo lists or object ko concatinate karta hai
// // var merge=students1.concat(students2)
// // console.log(merge)
// console.log(students2)

// //object Destructuring====object se data get karna
// var student={
//     name:"Hassan",
//     school:"Abc",
//     roll:123
// }
// // console.log(student.name) //simple way
// let {name,school,roll}=student;
// console.log(school)
// console.log(name)

// // //Ternary operators
// // //simple way
// var age=20;
// // if(age>30){
// //     console.log("Over age")
// // }
// // else{
// //     console.log("Invalid")
// // }
// //use ternary operators
// var check= age > 30 ? "Above 30" : "less than 30"
// console.log(check)


// // Asynchronous And Synchronous
// var p=new Promise(function(resolve,reject){
//     var name= "Ali";
//     if(name==="Ali"){
//         resolve("He is a student")
//     }else{
//         reject("Invalid")
//     }
// })

// p.then(function(data){
//     console.log("Resolve",data)
// })
// .catch(function(error){
//     console.log("Error",error)
// })
// . 
// . 
// . 
// . 
// . 
// . 
// . 
//Promise on pending.....
// var p=new Promise(function(resolve,reject){
    
//     if(true){
//         setTimeout(()=>{
//             resolve("its resolve")
//         },3000)
//     }else{
//         reject("Reject")
//     }
// })
// console.log(p)
// p.then(function(data){
//     console.log("Resolve",data)
// })
// .catch(function(error){
//     console.log("Error",error)
// })
// .
// . 
// .
// . 
// . 
// . 
// //How To get the data from firebase database
// let f=new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//         if(data.val()){
//             resolve(data.val())
//         }else{
//             reject("something is wrong")
//         }
//     })
// })
// f.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })


















