// Iteration 1: Names and Input
let hacker1 = "Carolina";

console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Victor";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

if (hacker1.length === hacker2.length) {
    console.log( `Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

//Print the characters of the driver's name, separated by space, and in capital letters
const driverUpperCase = hacker1.toUpperCase()

let newName = " ";

for ( let i = 0 ; i < hacker1.length ; i ++) {
    newName += driverUpperCase[i] + " " 
}

console.log(newName);

//Print all the characters of the navigator's name in reverse order

let navigatorReverse = "";

for ( let i = hacker2.length - 1; i >= 0 ; i--) {
    navigatorReverse += hacker2[i];
    }

    console.log(navigatorReverse);

//Depending on the lexicographic order of the strings, print:

if ( hacker1.localeCompare(hacker2) === -1 ) {
    console.log ("The driver's name go first")
}

if (hacker1.localeCompare(hacker2) === 1 ) {
    console.log ("Yo, the navigator goes first, definitely.")
}

if (hacker1.localeCompare(hacker2) === 0) {
    console.log ("What?! You both have the same name?")
}


