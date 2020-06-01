//Question 1
const firstElem = document.getElementById("container");

//Question 2
const secondElem = document.querySelector("#container");

//Question 3
const thirdElem = document.getElementsByClassName("second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const ol_item_class_third = document.querySelector("ol .third");

//5) Give the section with an id of container the text "Hello!".
const helloText = "Hello";
document.querySelector("#container").append(helloText);

//Add li to the ul
const ul = document.querySelector("ul");
const li = document.createElement("LI");
const textnode = document.createTextNode("four");
li.appendChild(textnode);
ul.appendChild(li);

const ol = document.querySelector("ol");
const list = ol.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].style.backgroundColor = "green";
}

//6) Add the class main to the div with a class of footer.

const footer = document.querySelector(".footer.main");
footer.classList.add("main");

//Question 7
footer.classList.remove("main");

const classNameFooter = document.getElementsByClassName("footer").remove;
