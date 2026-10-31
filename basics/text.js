"use strict" //treat all js code as newer version
//console.log("hello")
var accountno=12345
let accountid="vk@123"
//console.table([accountno,accountid])
//alert(3+3)//will give error as we are using nodejs not browser
let num="44abc"
let strval=Number(num)+22
//console.log(strval)
let h=undefined
//console.log(h)
let h1=Number(h)
//console.log(h1)
let a=1
//console.log(Boolean(a))
let b=""
//console.log(Boolean(b))
let c="hello"
//console.log(Boolean(c))
let d=3
//console.log(Boolean(d))
//console.log(+true)
//console.log(+"")
let e=1
let f=e++
//console.log(e)//2 
//console.log(f)//1 as value of e incremented after returning the value of e
let g=1
let k=++g
//console.log(g) //2
//console.log(k)//2 as value assigned to k after increment
let name="Vinayak"
let age=21
//console.log(`My name is ${name} and my age is ${age}`)
const gamename=new String('hello')
//console.log(game.__proto__)
//console.log(gamename.length)
let max=20
let min=10
//console.log(Math.floor(Math.random()*(10)+1+(max-min)))
let mydate=new Date()
/* console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString()) */
let date=new Date(2026,9,24)
//console.log(date.toDateString())
let arr=[1,2,3,4]
//console.log(arr)
let arr1=new Array(2,4,7,8)
/* console.log(arr1)
console.log(typeof arr)
console.log(typeof arr1) */
let arr3=[1,2,3,4]
let arr2=[6,7,8]
let arr4=arr3.concat(arr2)
//console.log(arr4)
let arr5=[1,2,[3,4,5],[6,[7,8]]]
let arr6=arr5.flat()
let arr9=arr5.flat(0)
let arr7=arr5.flat(1)
let arr8=arr5.flat(2)
//console.log(arr6,arr9,arr7,arr8)
let obj2=new Object()
obj2.id="123abc"
obj2.name="Rahul"
//console.log(obj2)
let obj3={
    name:{
        first_name:"Vinayak",
        last_name:"Varshney"
    },
    rollno:41
}
//console.log(obj3.name.first_name)
let obj4={1:"a",2:"b"}
let obj5={3:"c",4:"d"}
let obj6=Object.assign({},obj4,obj5)
/* console.log(obj4)
console.log(obj6) */
//console.log(obj3.name)
//const {name}=obj3
//console.log(name)
const arr_func=()=>{
    console.log(this)
}
//arr_func()
function reg_func(){
    console.log(this)
}
//reg_func()
const arrow_fun=(num1,num2)=>{
    return num1+num2
}
const arrow_func2=(num1,num2)=>(num1+num2)
//console.log(arrow_fun(1,2))
//console.log(arrow_func2(3,4))
(function hello(){
    console.log("hello")
})();
/* ((nam)=>{
    console.log(nam)
})("hitesh") */
let var1=null??undefined
//console.log(var1)
let var2=100
var2<80 ? console.log("less than 80"):console.log("more than 80")
