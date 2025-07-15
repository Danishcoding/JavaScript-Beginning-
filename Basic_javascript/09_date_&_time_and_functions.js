/**************************************************************
 *              JavaScript: Date & Time Functions
 *  Description:
 *  Demonstrates JavaScript's Date object with current/custom 
 *  date creation, get/set methods, and formatting utilities.
 **************************************************************/

// ✅ Current Date and Time
const now = new Date();
console.log(`📅 Current Date & Time: ${now}`);
console.log("----------------------------------------------------------");

// ✅ Custom Date: new Date(year, monthIndex, day, hours, minutes, seconds)
const customDate = new Date(2023, 4, 15, 10, 30, 0); // May is month 4 (0-based index)
console.log(`📌 Custom Date (May 15, 2023, 10:30 AM): ${customDate}`);
console.log("----------------------------------------------------------");

// ✅ toDateString(): Readable Date Format (e.g. Mon Jul 15 2025)
const readableDate = new Date().toDateString();
console.log(`📄 Readable Date (toDateString): ${readableDate}`);
console.log("----------------------------------------------------------");

// ================================
// 🔍 Get Methods in Date Object
// ================================
const sampleDate = new Date();

console.log(`📆 getFullYear(): ${sampleDate.getFullYear()}`);
console.log(`📅 getMonth(): ${sampleDate.getMonth()} ➜ Display Month (+1): ${sampleDate.getMonth() + 1}`);
console.log(`📆 getDate(): ${sampleDate.getDate()}`);
console.log(`📅 getDay() (0=Sun): ${sampleDate.getDay()}`);
console.log(`⏰ getHours(): ${sampleDate.getHours()}`);
console.log(`⏰ getMinutes(): ${sampleDate.getMinutes()}`);
console.log(`⏰ getSeconds(): ${sampleDate.getSeconds()}`);
console.log("----------------------------------------------------------");

// ================================
// 🛠 Set Methods in Date Object
// ================================
const setDateExample = new Date();
console.log(`🕒 Original Date: ${setDateExample.toString()}`);

// 1️⃣ setFullYear()
setDateExample.setFullYear(2025);
console.log(`✅ setFullYear(2025): ${setDateExample.toString()}`);

// 2️⃣ setMonth()
setDateExample.setMonth(11); // December
console.log(`✅ setMonth(11): ${setDateExample.toString()}`);

// 3️⃣ setDate()
setDateExample.setDate(25);
console.log(`✅ setDate(25): ${setDateExample.toString()}`);

// 4️⃣ setHours()
setDateExample.setHours(15); // 3 PM
console.log(`✅ setHours(15): ${setDateExample.toString()}`);

// 5️⃣ setMinutes()
setDateExample.setMinutes(45);
console.log(`✅ setMinutes(45): ${setDateExample.toString()}`);

// 6️⃣ setSeconds()
setDateExample.setSeconds(30);
console.log(`✅ setSeconds(30): ${setDateExample.toString()}`);

console.log("----------------------------------------------------------");
console.log(`🎯 Final Date After All Set Methods: ${setDateExample.toString()}`);
console.log("----------------------------------------------------------");

// ================================
// 🗓️ Date Formatting Functions
// ================================

// 1️⃣ toString() ➜ Full date and time string
const stringDate = new Date().toString();
console.log(`📝 toString(): ${stringDate}`);
console.log("----------------------------------------------------------");

// 2️⃣ toDateString() ➜ Only the date part (e.g. Tue Jul 15 2025)
const dateOnly = new Date().toDateString();
console.log(`📅 toDateString(): ${dateOnly}`);
console.log("----------------------------------------------------------");

// 3️⃣ toTimeString() ➜ Only the time part (e.g. 10:45:12 GMT+0500 ...)
const timeOnly = new Date().toTimeString();
console.log(`⏱️ toTimeString(): ${timeOnly}`);
console.log("----------------------------------------------------------");

// 4️⃣ toLocaleString() ➜ Localized date & time string (based on system)
const localized = new Date().toLocaleString();
console.log(`🌍 toLocaleString(): ${localized}`);
console.log("----------------------------------------------------------");
