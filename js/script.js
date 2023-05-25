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
const favColorElement = document.getElementById('fav-color');
console.log('Favorite Color Element: ' + favColorElement);

// Password
const passwordElement = document.getElementById('password');
console.log('Password Element: ' + passwordElement);


//###### Manual Inputs ######\\
// Final String
const finalStringInput = '21';
console.log('Final String: ' + finalStringInput);


/* *****************************************
* LOGIC
* *****************************************/
console.log('=============== LOGIC =================');


//###### User Input ######\\
// Get User First Name
const firstNameInput = prompt('Qual\'è il tuo nome?', 'Vincenzo');
console.log('First Name: ' + firstNameInput);

// Get User Last Name
const lastNameInput = prompt('Qual\'è il tuo cognome?', 'Mazzarella');
console.log('Last Name: ' + lastNameInput);

// Get User favorite color
const favColorInput = prompt('Qual\'è il tuo colore preferito?', 'Blu');
console.log('Favorite Color: ' + favColorInput);


//###### Generate Password ######\\
// Concatenate strings
const password = firstNameInput + lastNameInput + favColorInput + finalStringInput;
console.log('Generated Password: ' + password);


//###### Show Rersult ######\\
// Update first name
firstNameElement.innerText = firstNameInput;

// Update last name
lastNameElement.innerText = lastNameInput;

// Update favorite color
favColorElement.innerText = favColorInput;

// Update password
passwordElement.innerText = password;


console.log('=============== DONE =================');