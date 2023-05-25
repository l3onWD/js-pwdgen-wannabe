/* *****************************************
! DEBUG
* *****************************************/
// Check if file is linked to the HTML
console.log('JS OK!');


/* *****************************************
* INIT
* *****************************************/
console.log('=============== INIT =================');

//###### DOM Elements ######\\
// First name
const firstNameElement = document.getElementById('first-name');
console.log('First Name Element: ' + firstNameElement);

// Last name
const lastNameElement = document.getElementById('last-name');
console.log('Last Name Element: ' + lastNameElement);

// Favorite Color
const colorElement = document.getElementById('fav-color');
console.log('Favorite Color Element: ' + colorElement);

// Password
const pswElement = document.getElementById('password');
console.log('Password Element: ' + pswElement);


//###### Manual Inputs ######\\
// Final String
const finalString = '21';
console.log('Final String: ' + finalString);


/* *****************************************
* LOGIC
* *****************************************/
console.log('=============== LOGIC =================');

//###### User Input ######\\
// Get User First Name
const firstName = prompt('Qual\'è il tuo nome?', 'Vincenzo');
console.log('First Name: ' + firstName);

// Get User Last Name
const lastName = prompt('Qual\'è il tuo cognome?', 'Mazzarella');
console.log('Last Name: ' + lastName);

// Get User favorite color
const favColor = prompt('Qual\'è il tuo colore preferito?', 'Blu');
console.log('Favorite Color: ' + favColor);


//###### Generate Password ######\\
// Concatenate strings
const password = firstName + lastName + favColor + finalString;
console.log('Generated Password: ' + password);


//###### Show Rersult ######\\
// Update HTML element
pswElement.innerText = password;

console.log('=============== DONE =================');