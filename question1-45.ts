import inquirer from "inquirer"
// question#1 environment set
// Install Node.js, TypeScript and VS Code on your computer.

// question#2

let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// question#3

let myName = "John Doe";
// Lowercase
let lowercaseName = myName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Uppercase
let uppercaseName = myName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Titlecase
let words = myName.split(" ");
let titlecaseName = "";
for (let word of words) {
    titlecaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
titlecaseName = titlecaseName.trim();
console.log("Titlecase:", titlecaseName);

// question#4

let quote = "Try to be a rainbow in someone's cloud.";
let author = "Maya Angelou";
console.log(`${author} once said, "${quote}"`);

// question#5

let famous_person = "Maya Angelou";
let famous = "Try to be a rainbow in someone's cloud.";
let message = `${famous_person} once said, "${famous}"`;
console.log(message);

// queston#6

let personNameWithWhitespace = "\t\n   John Doe \t\n";
console.log("Name with whitespace:", personNameWithWhitespace);
let strippedName = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);

// queston#7

// Addition
console.log("Addition:", 5 + 3);
// Subtraction
console.log("Subtraction:", 10 - 2);
// Multiplication
console.log("Multiplication:", 4 * 2);
// Division
console.log("Division:", 16 / 2);

// Question#8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// question#9

let favoriteNumber = 7;
let mesage = `My favorite number is ${favoriteNumber}.`;
console.log(mesage);

// question#10:

// Program written by [zakia bashir]
// Date: [23/03/2024]
// This program demonstrates how to store a person's name with whitespace characters,
// print the name with the whitespace characters included, and then print the stripped
// name after removing the whitespace characters.

let personNameWithinWhitespace = "\t\n   John Doe \t\n"; // Including whitespace characters
console.log("Name with whitespace:", personNameWithWhitespace);

let stripped1Name = personNameWithinWhitespace.trim(); // Stripping whitespace using trim() method
console.log("Stripped name:", stripped1Name);

// question#11

let names = ["Alice", "Bob", "Charlie", "David"];
// Printing each person's name by accessing each element in the list, one at a time
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// question#12

let myname = ["Alice", "Bob", "Charlie", "David"];
// Personalized greetings to each person
for (let name of names) {
    console.log(`Hello ${myname}, I hope you're having a great day!`);
}
// question#13

let transportation = ["car", "motorcycle", "bicycle", "train"];
// Statements about each mode of transportation
for (let mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}
// question#14

let dinnerGuests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Invitations to dinner for each guest
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}
// question#15

// One guest can't make it, so we need to replace them with someone else
let newGuest = "Nelson Mandela";
let replacedGuest = dinnerGuests[1]; // Assuming Bob can't make it
dinnerGuests[1] = newGuest;
// Informing the replaced guest and inviting the new guest
console.log(`Dear ${replacedGuest}, unfortunately, our plans have changed and we won't be able to have you for dinner.`);
console.log(`Dear ${newGuest}, I would be honored to have you join me for dinner.`);

// question#16

// Starting with the program from Exercise 15
let dinner2Guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Adding new guests
dinner2Guests.unshift("Isaac Newton"); // Adding to the beginning
dinner2Guests.splice(Math.floor(dinner2Guests.length / 2), 0, "Galileo Galilei"); // Adding to the middle
dinner2Guests.push("Charles Darwin"); // Adding to the end

// Printing new invitation messages
for (let guest of dinner2Guests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

// Question#17:

// Starting with the program from Exercise 16
// Informing about the limitation on the number of guests
console.log("Unfortunately, our new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Removing guests until only two names remain
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop(); // Removing last guest
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

// Printing invitation messages to the two remaining guests
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

// Removing the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();

// Printing to ensure an empty list
console.log("Empty list:", dinnerGuests);

// Question#18:

// Think of at least five places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Great Barrier Reef"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Still in original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Still in original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// Question#19:

// Starting with the program from Exercise 16
let dinner3Guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Printing the number of people invited to dinner
console.log(`You are inviting ${dinner3Guests.length} people to dinner.`);

// Informing about the limitation on the number of guests
console.log("Unfortunately, our new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Removing guests until only two names remain
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop(); // Removing last guest
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

// Printing invitation messages to the two remaining guests
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

// Removing the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();

// Printing to ensure an empty list
console.log("Empty list:", dinnerGuests);

// Question#20:

let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// Printing the list of mountains
console.log("List of mountains:", mountains);

// question#21

// Creating objects containing items
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction"
};

// Printing the objects
console.log("Car:", car);
console.log("Book:", book);

// question#22

let languages: string[] = ["JavaScript", "Python", "Java", "TypeScript"];

// Introducing an intentional error (using an incorrect index)
console.log(languages[4]); // This will produce an index error

// Correcting the error by using a valid index
console.log(languages[2]); // Accessing the third element (index 2) to avoid the error

// question#23

let x = 5;
let y = 10;
let z = 5;

// Test 1: Is x equal to 5?
console.log("Is x equal to 5? I predict True.");
console.log(x == 5); // True

// Test 2: Is y not equal to 10?
console.log("Is y not equal to 10? I predict False.");
console.log(y != 10); // False

// Test 3: Is z less than or equal to 5?
console.log("Is z less than or equal to 5? I predict True.");
console.log(z <= 5); // True

// Test 4: Is x greater than y?
console.log("Is x greater than y? I predict False.");
console.log(x > y); // False

// Test 5: Is x less than or equal to y?
console.log("Is x less than or equal to y? I predict True.");
console.log(x <= y); // True

// Test 6: Is x equal to 5 and y equal to 10?
console.log("Is x equal to 5 and y equal to 10? I predict True.");
console.log(x == 5 && y == 10); // True

// Test 7: Is x equal to 5 or y equal to 20?
console.log("Is x equal to 5 or y equal to 20? I predict True.");
console.log(x == 5 || y == 20); // True

// Test 8: Is x not equal to 5 and y not equal to 10?
console.log("Is x not equal to 5 and y not equal to 10? I predict False.");
console.log(x != 5 && y != 10); // False

// Test 9: Is x greater than 2 and less than 10?
console.log("Is x greater than 2 and less than 10? I predict True.");
console.log(x > 2 && x < 10); // True

// Test 10: Is y greater than or equal to 10 or z less than 5?
console.log("Is y greater than or equal to 10 or z less than 5? I predict True.");
console.log(y >= 10 || z < 5); // True

// question#24

let string1 = "hello";
let string2 = "world";
let string3 = "hello";

// Test 11: Test for equality with strings
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2); // False

// Test 12: Test for inequality with strings
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True

// Test 13: Test for equality with strings using lowercase function
console.log("Is string1 equal to string3 in lowercase? I predict True.");
console.log(string1.toLowerCase() == string3.toLowerCase()); // True

// Numerical tests
let num1 = 5;
let num2 = 10;

// Test 14: Numerical test for greater than
console.log("Is num2 greater than num1? I predict True.");
console.log(num2 > num1); // True

// Test 15: Numerical test for less than or equal to
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2); // True

// Test 16: Test using "and" operator
console.log("Is num1 less than 10 and num2 greater than 5? I predict True.");
console.log(num1 < 10 && num2 > 5); // True

// Test 17: Test using "or" operator
console.log("Is num1 equal to 5 or num2 equal to 10? I predict True.");
console.log(num1 == 5 || num2 == 10); // True

// Array tests
let array = [1, 2, 3, 4, 5];

// Test 18: Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3)); // True

// Test 19: Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6)); // True

// question#25

let alien_color = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

let aliana_color = 'red';

if (aliana_color === 'green') {
    console.log("The player just earned 5 points.");
}

// question#26

let aliens_color = 'green';

if (aliens_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}
let ayesha_color = 'red';

if (ayesha_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// question#27

let ali_color = 'green';

if (ali_color === 'green') {
    console.log("The player earned 5 points.");
} else if (ali_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (ali_color === 'red') {
    console.log("The player earned 15 points.");
}
let ali1_color = 'yellow';

if (ali1_color === 'green') {
    console.log("The player earned 5 points.");
} else if (ali1_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (ali1_color === 'red') {
    console.log("The player earned 15 points.");
}
let ali2_color = 'red';

if (ali2_color === 'green') {
    console.log("The player earned 5 points.");
} else if (ali2_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (ali2_color === 'red') {
    console.log("The player earned 15 points.");
}

// question#28

let age = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// question#29

// Array of favorite fruits
let favorite_fruits = ['banana', 'apple', 'strawberry'];

// Five if statements to check if a certain fruit is in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges!");
}

if (favorite_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
} else {
    console.log("You don't like pineapples!");
}

// question#30

// Array of usernames
let usernames = ['user1', 'user2', 'admin', 'user3', 'user4'];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// question#31

// Array of usernames
let usernames1 = ['user1', 'user2', 'admin', 'user3', 'user4'];

// Check if the list of users is not empty
if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (let username of usernames1) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// question#32

// List of current users
let current_users = ['user1', 'user2', 'admin', 'user3', 'user4'];

// List of new users
let new_users = ['user5', 'user6', 'user7', 'admin', 'USER1'];

// Loop through new users to check if username is available
for (let new_user of new_users) {
    // Convert both new username and current usernames to lowercase for case insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    let lowercase_current_users = current_users.map(user => user.toLowerCase());
    
    // Check if the new username is in the list of current usernames
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}

// question#33

// Array of numbers 1 through 9
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Check the last digit of the number to determine the ordinal ending
    let ending;
    if (number === 1) {
        ending = "st";
    } else if (number === 2) {
        ending = "nd";
    } else if (number === 3) {
        ending = "rd";
    } else {
        ending = "th";
    }
    console.log(number + ending);
}

// question#34

// Array of favorite pizza names
let pizzas = ['pepperoni', 'margherita', 'hawaiian'];

// Loop through the array and print a sentence for each pizza
for (let pizza of pizzas) {
    console.log("I like " + pizza + " pizza.");
}

// Additional line outside the loop
console.log("I really love pizza!");

// question#35

// List of animals with a common characteristic
let animals = ['dog', 'cat', 'rabbit'];

// Print out the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");

// question#36

// Function to create a T-shirt
function make_shirt(size: string, message: string) {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Call the function
make_shirt('medium', 'Hello, world!');

// question#37

// Modified function with default parameters
function makes_shirt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Call the function with default parameters
makes_shirt();

// Call the function with different parameters
makes_shirt('medium');
makes_shirt('small', 'JavaScript is fun!');

// question#38

// Function to describe a city
function describe_city(city: string, country: string = 'default') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for five different cities
describe_city('Karachi', 'Pakistan');
describe_city('London', 'United Kingdom');
describe_city('Sydney');
describe_city('makah','saudia arabia');
describe_city('mailsi','pakistan');

// question#39

// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('New York', 'USA'));
console.log(city_country('madinah sharif', 'saudia araibia'));
console.log(city_country('mumbai', 'india'));

// question#40

// Function to create a music album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title , tracks: tracks};
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to create albums
console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 12));
console.log(make_album('Artist3', 'Album3', 8));

// question#41

// Function to show magicians
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
let magicians = ['Magician1', 'Magician2', 'Magician3'];

// Call the function
show_magicians(magicians);

// question#42

// Function to make magicians great
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}

// Call the function and show the modified list
let great_magicians = make_great(magicians.slice()); // slice() to create a copy of the array
show_magicians(great_magicians);

// question#43

// Function to make magicians great without modifying the original array
function makes_great(magicians: string[]) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Call the function with a copy of the original array
let unchanged_magicians = makes_great(magicians.slice());
show_magicians(magicians);
show_magicians(unchanged_magicians);

// question#44

// Function to summarize a sandwich order
function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

// Call the function with different number of arguments
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');

// question#45
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// answer:
// / Function to store information about a car in an Object

function car_info(manufacturer: string, model: string, ...details: [string, any][]) {
    let car = { manufacturer: manufacturer, model: model };
    for (let detail of details) {
        car:detail[0] = detail[1];
    }
    return car;
}

// Call the function with required information and additional details
let car1 = car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2020]);
let car2 = car_info('Ford', 'Mustang', ['color', 'red'], ['year', 2018], ['transmission', 'automatic']);

// Print the Objects returned by the function
console.log(car1);
console.log(car2);

