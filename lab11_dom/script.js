console.log("Sefat Monzor")
//select <div id="special"
let division = document.querySelector("#special")
//division = variable
//selecting an id from document using queryselector 
//Using # to select the id

//now we change the CSS style(color) of the division.
division.style.color = "olive"

//Select <span class="s3">20%</span>
//To select a class, we press .
let s3 = document.querySelector(".s3")
//Change CSS style, color, font-size, to the collected span
s3.style.color = ("magenta")
s3.style.fontSize = "30px"

//select <span class = "s4"> OFF </span>
let s4 = document.querySelector(".s4")
s4.style.backgroundColor = "lightgray"
s3.style.padding = "12px"

//change text context 
s3.textContent = "50%"
s4.innerHTML = "OFF by <b><em>midnight</em></b>"

//className method 
let spans = document.querySelectorAll("#special span")
//assign  the class name only to one element/ span
spans[1].className = "changefontfamily"

//setAttribute method 
//find the first <h1> element and we are going to set the class attribute titlw to it 
let title = document.querySelector("h1")
title.setAttribute("class","styletitle")

//remove a class name from an element
//remove the class 'info' from div class= info
let divmoreinfo = document.querySelector(".moreinfo")
divmoreinfo.classList.remove("info")

//append a text after <div id = "special">
let divspecial = document.querySelector("#special")
divspecial.append("NEW INFORMATION")

//append child to adda new li to <ul class="todo">
//step 1: Cheat a list element 
let newitem = document.createElement("li")
//step 2: Give contem to the new Li 
let newlist = document.createTextNode("Post Student's work")
//Join the newlist into newitem 
newitem.appendChild(newlist)
//step 3: Append as child the newitem into the document
//Append to <ul class="todo>"
let todolist = document.querySelector(".todo")
todolist.appendChild(newitem)

// remove an element using removeChild method 
todolist.removeChild(todolist.children[0])

//remove an element using remove method 
//select the element that you want to remove and use the remove method 
todolist.children[0].remove()