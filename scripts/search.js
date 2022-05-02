// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

let arr=[]
let newsse=localStorage.getItem("news")

async function news(newsse)
{
    try{
        const url=`https://masai-mock-api.herokuapp.com/news?q=${newsse}`
        let res=await fetch(url);
        let data=await res.json()
        append(data.articles)
       
    }
    catch(err){
        console.log(err)
    }
}
news(newsse)

function append(data){
    document.querySelector("#results").innerHTML=""
    data.map(function(elem){
        
        let box=  document.createElement("div")
        box.setAttribute("class","news")
box.addEventListener("click",function(){
    arr.push(elem)
    localStorage.setItem("detailed_news",JSON.stringify(arr))
    window.location.href="news.html"
})

       let box1=  document.createElement("div")
       let box2=  document.createElement("div")

       let image=document.createElement("img")
       image.src=elem.urlToImage;
       image.setAttribute("id","image")

       let head=document.createElement("h3")
       head.innerText=elem.title

       let para=document.createElement("p")
       para.innerText=elem.description;
      
       box1.append(image)
       box2.append(head,para)
     box.append(box1,box2)
       document.querySelector("#results").append(box)


      
    })
}
document.querySelector("#search_input").addEventListener("keydown",find)
function find(e){
   
  if(e.code=="Enter")
  {
  let val=  document.querySelector("#search_input").value
    localStorage.setItem("news",val)
    newsse=localStorage.getItem("news")
    news(newsse)
  }
   
}
