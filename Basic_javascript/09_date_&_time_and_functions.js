/**************************************************************
 *              JavaScript: Date & Time Functions
 *  Description:
 *  Demonstrates use of JavaScript's built-in Date object,
 *  including get/set methods and date formatting.
 **************************************************************/

// ✅ Create Current Date and Time
let now = new Date();
console.log(`Now Date and Time: ${now}`);
console.log("----------------------------------------------------------");

// ✅ Create Custom Date
let customDate = new Date(2023, 4, 15, 10, 30, 0); // May 15, 2023
console.log(`Custom Date: new Date(2023, 4, 15, 10, 30, 0) ➜ ${customDate}`);
console.log("----------------------------------------------------------");

// ✅ toDateString(): Readable Date Format
let today = new Date();
let readableDate = today.toDateString();
console.log(`Readable Date (toDateString()): ${readableDate}`);
console.log("----------------------------------------------------------");

// ================================
// 🔍 Get Methods in Date Object
// ================================
let sampleDate = new Date();

console.log(`getFullYear(): ${sampleDate.getFullYear()}`);
console.log(`getMonth(): ${sampleDate.getMonth()} ➜ Display Month (add +1): ${sampleDate.getMonth() + 1}`);
console.log(`getDate(): ${sampleDate.getDate()}`);
console.log(`getDay(): ${sampleDate.getDay()}`);
console.log(`getHours(): ${sampleDate.getHours()}`);
console.log(`getMinutes(): ${sampleDate.getMinutes()}`);
console.log(`getSeconds(): ${sampleDate.getSeconds()}`);
console.log("----------------------------------------------------------");

// ================================
// 🛠 Set Methods in Date Object
// ================================
let setDateExample = new Date(); // initial reference date

console.log(`Original Date: ${setDateExample.toString()}`);

// 1️⃣ setFullYear()
console.log(`Syntax: setDateExample.setFullYear(2025)`);
setDateExample.setFullYear(2025);
console.log(`Updated Date: ${setDateExample.toString()}`);

// 2️⃣ setMonth()
console.log(`Syntax: setDateExample.setMonth(11)`); // December (0-based index)
setDateExample.setMonth(11); // December
console.log(`Updated Date: ${setDateExample.toString()}`);

// 3️⃣ setDate()
console.log(`Syntax: setDateExample.setDate(25)`);
setDateExample.setDate(25);
console.log(`Updated Date: ${setDateExample.toString()}`);

// 4️⃣ setHours()
console.log(`Syntax: setDateExample.setHours(15)`); // 3 PM
setDateExample.setHours(15);
console.log(`Updated Date: ${setDateExample.toString()}`);

// 5️⃣ setMinutes()
console.log(`Syntax: setDateExample.setMinutes(45)`);
setDateExample.setMinutes(45);
console.log(`Updated Date: ${setDateExample.toString()}`);

// 6️⃣ setSeconds()
console.log(`Syntax: setDateExample.setSeconds(30)`);
setDateExample.setSeconds(30);
console.log(`Updated Date: ${setDateExample.toString()}`);

console.log("----------------------------------------------------------");

// ✅ Final Custom Date with All Set Values
console.log(`Final Date After All Set Methods: ${setDateExample.toString()}`);


console.log("----------------------------------------------------------");


// Format Date as String 


// 1 - toString()
// Description Full date-time String

let new_1 = new Date();
let date_time_string = new_1.toString()

console.log(`The toString() Function is do the simple the date and time: ${date_time_string}`)

console.log("----------------------------------------------------------");



// 2 - toDateString()

// Description: Only date part 

let new_2 = new Date()

let date_part = new_2.toDateString()

console.log(`The toDateString() is function used for the return the date Part:  ${date_part}`)


console.log("----------------------------------------------------------");

// 3 - toTimeString()
// Description: This function is return the time

let new_3 = new Date()

let  time_part = new_3.toTimeString()

console.log(`The toTimeString() is used for the return part of time: ${time_part}`)

console.log("----------------------------------------------------------");

// 3 - toLocaleString()
// Description: This function is return localized the date and Time

let new_4 = new Date()

let localized_string = toLocaleString()

console.log(`The localized String is the return the ${localized_string}`)


