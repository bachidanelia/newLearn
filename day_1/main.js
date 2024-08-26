// 1. Write a function that reverses a string.

// const reverseThisString = (string) => {
//     const original = string;
//     const stringToArray = original.split('');
//     const reversed = stringToArray.reverse();
//     const removingCommas = reversed.join('');
//     console.log(removingCommas);
// }
// reverseThisString('hello');
// reverseThisString('opaaa');
// reverseThisString('1234');

// 2. Create an array of numbers and write a function to find the largest number in the array.

// const compareNumbers = (array) => {
//     let biggestNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(biggestNumber < array[i]){
//             biggestNumber = array[i];
//         }
//     }
//     console.log(biggestNumber)
// }

// compareNumbers([1000000,8,800,4,6,100,666,1200])


// 3. Write a function that counts the number of vowels in a given string.

// const vowels = ['a','u','o','e','i'];

// const countVowels = (word) => {
//     let numberOfVowels = 0;
//     const splited = word.split('');
//     for (let i = 0; i < splited.length; i++) {
//         if(vowels.includes(splited[i])) {
//             numberOfVowels += 1;
//         }
//     }
//     console.log(numberOfVowels);
// }


// countVowels('stuff')
// countVowels('abracadabra')
// countVowels('kutakvertsxi')
// countVowels('aaaaa')


// 4. Create an object representing a person with properties for name, age, and city. 
// Then write a function that prints out a sentence using these properties.

// const data = {name:'bachi', age:'30', sex:'male'};

// const fillMyForm = () => {
//     console.log(`hello, my name is ${data.name}, i'm ${data.age} years old and i am a ${data.sex}.`)
// };

// fillMyForm();


// 5. Write a function that takes an array of numbers and returns a new array with only the even numbers.


// const filterNumbers = (arr) => {
//   return arr.filter(num => num % 2 === 0)
// }

// const input = filterNumbers([12, 77, 59, 96, 22, 14, 55, 98, 66])
// console.log(input)








// const sumNumbers = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     console.log(sum)
// }



// sumNumbers([120,8,800,4,6,100,666,1200])


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Exercises for Beginners

// 1. Basic Function
// Write a function that takes two numbers as parameters and returns their sum.
// function addNumbers(a, b) {
//     // Your code here
//     return a + b
// }

// console.log(addNumbers(5, 3))

//   // Test your function
//   console.log("Exercise 1 result:", addNumbers(5, 3)); // Should output 8
  
//   // 2. Array Method - forEach
//   // Create an array of your favorite fruits and use the forEach method to print each fruit to the console.
// const fruits = ["apple", "banana", "orange", "mango"];

// fruits.forEach(element => console.log(element))
  
//   // Your code here
  
//   // 3. For Loop
//   // Write a for loop that prints the numbers from 1 to 10 to the console.
//   console.log("Exercise 3 result:");
//   // Your code here

//    for (let i = 1; i < 11; i++) {
//       console.log(i);
//    }

//   // 4. Function with Array Parameter
//   // Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers.
//   function sumArray(numbers) {
//     // Your code here
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total = total + numbers[i];    
//     }
//     console.log(total);
//   }
  
//   sumArray([5,5,5,5])
//   // Test your function
//   console.log("Exercise 4 result:", sumArray([1, 2, 3, 4, 5])); // Should output 15
  
//   // 5. Array Method - map
//   // Use the map method to create a new array where each number in the original array is doubled.
//    const numbers = [1, 2, 3, 4, 5];
//   // Your code here


//   const doubleIt = numbers.map((number) => {
//     return number * 2
//   })


// const numbers = [1, 2, 3, 4, 5];

// const doubleTheNumbers = (numbers) => {
//     let newNumbers = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         newNumbers = numbers[i] * 2
//         console.log(newNumbers)
//     }
// }

// doubleTheNumbers(numbers)

// console.log(doubleTheNumbers([1,2,3]))
  
//   console.log("Exercise 5 result:", doubledNumbers); // Should output [2, 4, 6, 8, 10]
  
//   // 6. For Loop with Conditional
//   // Write a for loop that prints all even numbers between 1 and 20 to the console.
//   console.log("Exercise 6 result:");
//   // Your code here


    // for (let i = 1; i < 21; i++) {
    //     if(i % 2 === 0){
    //         console.log(i)
    //     }
    // }
  
//   // 7. Function with Array Methods
//   // Write a function that takes an array of numbers and returns a new array containing only the even numbers.
//   function filterEvenNumbers(numbers) {
//     // Your code here
//   }

    // const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

    // const filterEvenNumbers = (numbers) => {
    //     for (let i = 0; i < numbers.length; i++) {
    //         if(numbers[i] % 2 === 0){
    //             console.log(numbers[i])
    //         }
    //     }
    // }

    // filterEvenNumbers(originalNumbers)
  
//   // Test your function
//   console.log("Exercise 7 result:", filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Should output [2, 4, 6, 8, 10]
  
//   // 8. Combining For Loop and Function
//   // Write a function that generates and returns an array of the first n Fibonacci numbers, where n is a parameter.
//   function generateFibonacci(n) {
//     // Your code here
//   }

    const generateFibonacci = (times) => {
        let main1 = 0
        let main2 = 0
        const first = 0
        const second = 1
        for (let i = 0; i < times; i++) {
            main1 = first + second
            
        }
    }
  
//   // Test your function
//   console.log("Exercise 8 result:", generateFibonacci(8)); // Should output [0, 1, 1, 2, 3, 5, 8, 13]