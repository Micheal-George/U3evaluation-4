// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()


var data=JSON.parse(localStorage.getItem("detailed_news"))
console.log(data)
append(data)


function append(data){
    document.querySelector("#detailed_news").innerHTML=""
    data.map(function(elem){
        
        let box=  document.createElement("div")
        box.setAttribute("class","news")
      

       let image=document.createElement("img")
       image.src=elem.urlToImage;
       image.setAttribute("id","image")

       let head=document.createElement("h3")
       head.innerText=elem.title

       let para=document.createElement("p")
       para.innerText=elem.content;
      
      
       box.append(image,head,para)
    
       document.querySelector("#detailed_news").append(box)


        console.log(elem.title)
    })
}