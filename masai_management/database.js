let Lsdata = JSON.parse(localStorage.getItem("databaseArr"))
console.log(Lsdata)


 function displayTable(){

    document.querySelector("tbody").innerHTML=""
    Lsdata.forEach( function(el ,i){
   let trow=document.createElement("tr")
   let td1=document.createElement("td")
   let td2=document.createElement("td")
   let td3=document.createElement("td")
   let td4=document.createElement("td")
   let td5=document.createElement("td")
   let td6=document.createElement("td")
   let image=document.createElement("img")

   td1.innerText=el.name
   td2.innerText=el.course
   td3.innerText=el.unit
   image.src=el.imge
  
   td5.innerText=el.batch
   td6.innerText="Delete"
   td6.addEventListener("click",function(){
    deleteItem (el,i)
    })
   
   td4.append(image)

   trow.append(td1,td2,td3,td4,td5,td6)
   document.querySelector("tbody").append(trow)
   
    });

}

displayTable()
let trash =[]
function deleteItem (el ,i){
   trash.push(el)
   localStorage.setItem("trash",JSON.stringify(trash))
   Lsdata.splice(i,1)
   displayTable(Lsdata)
   localStorage.setItem("databaseArr" ,JSON.stringify(Lsdata))
    
}

