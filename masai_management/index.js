let form = document.querySelector("#form")
form.addEventListener("submit", studentsDetail)


let databaseArr =JSON.parse(localStorage.getItem("databaseArr"))||[] 

function studentsDetail(event){
    console.log("hello")
event.preventDefault()
let name =form.name.value
let course =form.course.value
let unit =form.unit.value
let imge =form.photo.value
let batch =form.batch.value

// console.log(name,course,unit,imge,batch)
let s1 = new database (name,course,unit,imge,batch)
databaseArr.push(s1)
localStorage.setItem("databaseArr",JSON.stringify(databaseArr))

}

function database (n,c,u,i,b){
    this.name=n
    this.course=c
    this.unit=u
    this.imge =i 
    this.batch ='Ft-web'+b;
}

function calculate (){
 let obj ={}
 for(let i=0;i<databaseArr.length;i++){
    if(obj[databaseArr[i].batch]==undefined){
        obj[databaseArr[i].batch]=1; 
     }else{
        obj[databaseArr[i].batch]++
     }
       
 }
  
// console.log(obj)
let beg =""
for(let key in obj){
    beg+= key+"-"+obj[key]+" "+ " "+"|" +" ";
}
document.querySelector("p").innerText=beg
}

calculate ()
