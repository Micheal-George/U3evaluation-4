// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()


async function news(country)
{
    try{
        const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
        let res=await fetch(url);
        let data=await res.json()
        append(data.articles)
        console.log(data.articles)
    }
    catch(err){
        console.log(err)
    }
}
news("in")

function append(data){
    document.querySelector("#results").innerHTML=""
    data.map(function(elem){
        
        let box=  document.createElement("div")
        box.setAttribute("class","news")
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


        console.log(elem.title)
    })
}
// async function news()
// {
//     try{
//         const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
//         let res=await fetch(url);
//         let data=await res.json()
//         append(data.articles)
//         console.log(data.articles)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

document.querySelector("#in").addEventListener("click",myFun)
 
function myFun()
{
    news("in")
}
document.querySelector("#us").addEventListener("click",myFun1)
 
function myFun1()
{
    news("us")
}
document.querySelector("#ch").addEventListener("click",myFun2)
 
function myFun2()
{
    news("ch")
}
document.querySelector("#uk").addEventListener("click",myFun3)
 
function myFun3()
{
    news("uk")
}
document.querySelector("#nz").addEventListener("click",myFun4)
 
function myFun4()
{
    news("nz")
}

document.querySelector("#search_input").addEventListener("keydown",find)
function find(e){
   
  if(e.code=="Enter")
  {
  let val=  document.querySelector("#search_input").value
    localStorage.setItem("news",val)
    window.location.href="search.html"
  }
   
}