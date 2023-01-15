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
const heading = document.querySelector('#main-heading');

heading.style.color = 'red';
console.log(heading);

const header = document.querySelector('#sec-heading');

header.style.color = 'blue';
console.log(header);


const listItems = document.querySelectorAll('.list-items');

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '3rem';

} 
console.log(listItems);



