/* *****************************************
! DEBUG
* *****************************************/
// Check if file is linked to the HTML
console.log('JS OK!');


/* *****************************************
* INIT
* *****************************************/
console.log('=============== INIT =================');

// Password Element
const pswElement = document.getElementById('psw-output');
console.log('Password Element: ' + pswElement);

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