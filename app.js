// 1. Select the section with an id of container without using querySelector.
// 2. Select the section with an id of container using querySelector.
// 3. Select all of the list items with a class of “second”.
// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
// 5. Give the section with an id of container the text “Hello!”.
// 6. Add the class main to the div with a class of footer.
// 7. Remove the class main on the div with a class of footer.
// 8. Create a new li element.
// 9. Give the li the text “four”.
// 10. Append the li to the ul element.
// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
// 12. Remove the div with a class of footer

//1
document.getElementById("container");

//2
const container = document.querySelector("#container");

//3
const second = document.getElementsByClassName("second");

//4
const olThird = document.querySelector("ol .third");

//5 (commented out to be able to do later questions--replaces ol/ul)
// container.innerText = "Hello!";

//6
const footer = document.querySelector(".footer");
footer.classList.add('main');

//7
footer.classList.remove('main');

//8
const newLi = document.createElement('li');

//9
newLi.innerText = "four";

//10
const ul = document.querySelector('ul');
ul.append(newLi);

//11
const ol = document.querySelector('ol');
const orderedLis = document.querySelectorAll('ol li');

for (let li of orderedLis){
    li.style.backgroundColor = "green";
}

//12
footer.remove();