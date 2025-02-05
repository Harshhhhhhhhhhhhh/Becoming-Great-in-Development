// Write the program to greet a person given their first and last name

function greet(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}! Welcome!`);
}

// Example Usage
greet("Harsh", "Raj");

// Write a program that greets a person based on their gender. (If else)
function greetPerson(firstName, lastName, gender) {
    if (gender.toLowerCase() === "male") {
        console.log(`Hello Mr. ${firstName} ${lastName}, Welcome!`);
    } else if (gender.toLowerCase() === "female") {
        console.log(`Hello Ms. ${firstName} ${lastName}, Welcome!`);
    } else {
        console.log(`Hello ${firstName} ${lastName}, Welcome!`);
    }
}

// Example Usage
greetPerson("Harsh", "Raj", "Male");  
greetPerson("Priya", "Sharma", "Female");  
greetPerson("Alex", "Taylor", "Other");  

//Write a program that counts from 0 - 100 and prints (for loop)
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//Write a program prints all the even numbers in an array 
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

const numbers = [10, 15, 20, 25, 30, 35, 40];
printEvenNumbers(numbers);

//Write a program to print the biggest number in an array
function findBiggestNumber(arr) {
    let biggest = arr[0];  // Assume first number is the biggest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];  // Update biggest if current number is larger
        }
    }
    console.log("The biggest number is:", biggest);
}


const num = [10, 20, 30, 5, 50];
findBiggestNumber(num);

//Write a program that prints all the male people’s first name given a complex objec

const people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Mike", lastName: "Johnson", gender: "male" },
    { firstName: "Emily", lastName: "Davis", gender: "female" },
    { firstName: "David", lastName: "Brown", gender: "male" }
];

function printMaleFirstNames(people) {
    // Filter people who are male, then print their first name
    const malePeople = people.filter(person => person.gender === "male");
    
    malePeople.forEach(person => {
        console.log(person.firstName);
    });
}

printMaleFirstNames(people);

//Write a program that reverses all the elements of an array
function reverseArray(arr) {
    const reversed = arr.reverse();  // Reverses the array in-place
    console.log("Reversed array:", reversed);
}


const array = [10, 20, 30, 40, 50];
reverseArray(array);

//Write a function that finds the sum of two numbers
function sum(a, b) {
    return a + b;  // Adds the two numbers and returns the result
}

const result = sum(5, 10);
console.log("The sum is:", result);



