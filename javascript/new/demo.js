// let demo= () =>{
//     let user=document.getElementById('uname').Value;
//     alert("hi"+user);
// }
// let demo =  () =>{
//     let c1 = document.getElementsByClassName('d1');
//     c1[1].Style.color="red";
// }
// let demo=()=>{
//     let c1=document.getElementsByTagName('p');
//     let result=c1.length;
//     alert("the count of paragraph tags"+result);
// }
// let demo =() =>{
//     let l1=document.createElement('label');
//     let txt=document.createTextNode("enter a user name");
//       l1.appendChild(txt);
//       let inp=document.createElement('input');
//       inp.setAttribute('type',"text");
//       inp.setAttribute('id',"uname");
//       inp.setAttribute("value","");
//       inp.setAttribute('placeholder',"enter a name");
//       l1.appendChild(inp);
//       document.body.appendChild(l1);
// }
// function  AddTask () {
//     const taskInput=document.getElementById('taskInput');
//     const taskList =document.getElementById('taskList');
//     const taskText =taskInput.Value.trim();
//     if(taskText===""){
//         alert ('Please enter a task');
//         return;
//     }
//     const li =document.createElement('li');
//     li.textContent=taskText;
//     const deleteButton =document.createElement('button');
//     deleteButton.textContent='Delete';
//     deleteButton.onclick=function(){
//         taskList.removeChild(li);
//     };
//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
//     taskInput.Value='';
// }
// localStorage.setItem('username','sree');
// var username =localStorage.getItem('username');
// console.log(username);
let obj={
    "stuname":"sree",
    "mark":100

}
console.log(obj.stuname);
console.log(obj["mark"]);