// let key="sname";

//  Creating objects

// const students={
//     sname:"gulu gulu",
//     course: "Gundagiri",
//     college:"namak Haram"
// }
// students[key]="chik tapak dam dam"
// console.log(students)

// Higher Order Functions



// function selectlanguge(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "C Compiler.";
//         }
//         data=cCompiler();
//     }
//     else if(language=='java'){
//         function javaCompiler(){
//             return "Java Compiler.";
//         }
//         data=javaCompiler();
//     }
//     return data
    
//     // console.log("You have selected : "+clbk());
// }

// console.log(selectlanguge("java"));
// console.log("hello world");
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innertext="Hello JS";
// // div[0].innerHTML="<h2 style=color:red>Hello JS</h2>";
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="Abes Engineering college";
// console.log(h1);
// div[0].appendChild(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color='red'
// h1.style.padding='20px'
// h1.style.marginLeft='100px'
// const img=document.createElement("img");
// img.src="./watch.jpg";
// console.log(img);
// div[0].appendChild(img);
// img.setAttribute("height","200px");
// // div[0].removeChild(img);

// function getData(){
//     console.log("Hi inside get data function");
//     div[0].innerHTML="<h2 style=color:cyan >Event Handled</h2>"
// }
// const button=document.getElementsByClassName("btn");
// console.log(document);
// button[0].addEventListener("click",getData);

// const promise=new Promise((resolve,reject)=>{
//     let a=5;
//     if(a>10){
//         resolve("Accepted");
//     }
//     else{
//         reject("Not Accepted");
//     }
// })
// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("All Resources have closed"));

// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"harshit sharma",Stack:"Mern Stack"});
// });
// // promise2.then((data)=>{console.log(data)})
// // .catch(x=>{console.log(x)})
// promise2.then((data)=>{console.log("hi "+data.name)})
// .catch(x=>{console.log(x)})
const response=fetch("https://dummyjson.com/products")
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})