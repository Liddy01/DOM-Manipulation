// DOM Manipulation

// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title)

// GetElementByClassName()
// const ListItem = document.getElementsByClassName('list-items');
// console.log(ListItem)


// GetElementByTagName()
// const ListItem = document.getElementsByTagName('li');
// console.log(ListItem)


// querrySelector
// const container = document.querySelector('div');
// console.log(container)

// querrySelectorAll
// const container = document.querySelectorAll('div');
// console.log(container)



// Styling Elements
// const heading = document.querySelector('#main-heading');

// heading.style.color = 'red';
// console.log(heading);

// const header = document.querySelector('#sec-heading');

// header.style.color = 'blue';
// console.log(header);


// const listItems = document.querySelectorAll('.list-items');

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '3rem';

// } 
// console.log(listItems);




// // Creating Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding Elements
// ul.append(li)

// // Modifying the text

// // const firstListItem = document.querySelector('.list-items');

// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);

// li.innerText = 'X-men';

// // Modifying Attributes and Classes
// // Using Attributes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const heading = document.querySelector('#main-heading');
// console.log(heading.getAttribute('id'));

// const title = document.querySelector('#sec-heading');
// console.log(title.getAttribute('id'));


// // Using Classes
// li.classList.remove('list-items');
// console.log(li.classList.contains('list-items'));

// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'));


// // remove
// li.remove()





// DOM Manipulation

// Traverse the DOM

// // Parent Node Traversal
// // const ul = document.querySelector('ul');
// // console.log(ul.parentNode.parentNode);
// // console.log(ul.parentElement.parentElement);

// // Difference between parentElement and parentNode
// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);

// // *parentElement is a type of Node



// Child Node Traversal
let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = 'blue'




// Sibling Node Traversal







