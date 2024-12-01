const  A=document.getElementById("myElement");
console.log(A)
const b=document.getElementsByClassName("name")
console.log(b)

let  one=document.getElementById("Example1")
let spantag=document.createElement("span")
spantag.textContent="hi this is sathya"
let kohiliImag=document.createElement("img")
kohiliImag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0C1c_dBB2knX7wNrKJF3IWvJlR6_zYHyCA&s" 
kohiliImag.width="300"
one.append(spantag,kohiliImag)



let curry=document.createElement("iframe")
curry.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB69916_9-veVHTu7XwKFaIhvN-Of1xI3VLA&s"
curry.frameBorder=1

one.replaceChild(curry,kohiliImag)

let clone=one.cloneNode(true)
document.body.appendChild(clone)

const create=document.createElement("div")
create.className="container"
create.classList.add("sathya")
create.classList.add("hari")
create.classList.remove("sathya")
console.log(create)



let surya=document.createElement("img")
surya.src="https://i.pinimg.com/736x/64/63/8e/64638e8280d312460783468232e83fa5.jpg"
document.body.appendChild(surya)
surya.style.borderRadius=100%



surya.addEventListener("click",function()
{
    alert("hi this is curry")
})