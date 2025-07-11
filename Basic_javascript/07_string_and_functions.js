/***************************************/
//               String in JavaScript
/***************************************/

/*
 * A string is a sequence of characters used to represent text.
 * It can be declared using single quotes (' '), double quotes (" "), or backticks (` `).
 */

let name = "Danish";
let message = 'Hello';
let sentence = `Welcome`;

// ============================
// String Output (Printing)
// ============================

// Method 1: Concatenation (less readable)
console.log(message + " " + name + " " + sentence + " Here");

// Method 2: Template literals (recommended)
console.log(`${message} ${name} ${sentence} Here`);

console.log("--------------------------------------------------------");

// ============================
// String Functions / Methods
// ============================

// 01 - length
// Description: Returns the number of characters in the string
let word = "Pneumonoultramicroscopicsilicovolcanoconiosis";
let wordLength = word.length;
console.log(`This is a lung disease: "${word}"`);
console.log(`Length of the word is: ${wordLength}`);

console.log("--------------------------------------------------------");

// 02 - toUpperCase()
// Description: Converts all characters of the string to uppercase
let upperName = name.toUpperCase();
console.log(`Original name: "${name}"`);
console.log(`After toUpperCase(): "${upperName}"`);

console.log("--------------------------------------------------------");

// 03 - charAt()
// Description: Returns the character at the specified index
let index = 2;
let letter = name.charAt(index);
console.log(`Character at index ${index} in "${name}" is "${letter}"`);

console.log("--------------------------------------------------------");

// 04 - indexOf()
// Description: Returns the first index of the specified character
let letterToFind = "n";
let foundIndex = name.indexOf(letterToFind);
console.log(`Index of "${letterToFind}" in "${name}" is: ${foundIndex}`);

console.log("--------------------------------------------------------");

// 05 - substring(start, end)
// Description: Extracts part of a string from start (inclusive) to end (exclusive)
let part = name.substring(1, 4); // 'ani'
console.log(`Substring of "${name}" from index 1 to 4 is: "${part}"`);

console.log("--------------------------------------------------------");

// 06 - trim()
// Description: Removes leading and trailing spaces
let spacedWord = "     -Danish-     ";
let trimmed = spacedWord.trim();
console.log(`Before trim: "${spacedWord}"`);
console.log(`After trim: "${trimmed}"`);

console.log("--------------------------------------------------------");

// 07 - replace()
// Description: Replaces part of the string with another string
let url = "https://hr20%smarts.co/index.php";
let updatedUrl = url.replace('%20', '-');
console.log(`Updated URL: ${updatedUrl}`);

console.log("--------------------------------------------------------");

// 08 - includes()
// Description: Checks whether a string contains a specified value
let sentenceCheck = "JavaScript is fun to learn!";
let hasWord = sentenceCheck.includes("fun");
console.log(`Does the sentence include "fun"? ${hasWord}`); // true

// Case-sensitive example
console.log(`Does the sentence include "Fun"? ${sentenceCheck.includes("Fun")}`); // false

console.log("--------------------------------------------------------");

/*
 * Summary:
 * - Use template literals for better string readability.
 * - Always remember: strings are zero-indexed.
 * - Functions like includes(), substring(), and trim() are helpful for string operations in real-world coding.
 */
