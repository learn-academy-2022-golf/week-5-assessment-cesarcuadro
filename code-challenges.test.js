// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/*
Boiler Plate
describe("areYouHungry", () => {
it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
 })
})
*/

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretCode", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
     })
    })

    // ReferenceError: secretCode is not defined

// b) Create the function that makes the test pass.

/*
Create a function that takes one parameter named string.
The single parameter will take in a string as an argument.
Find a way to iterate through the string.
Select the character inside of the string.
Replace the character with an assigned number.
Return the encrypted string that has the same length as the original string.
*/

// const secretCode = (string) => {
//     let arr = [...string]
//     return arr
// }
//The initial troubleshooting step was to confirm that I converted the string into an array.
// Expected: "L4ck4d41s1c4l"
//     Received: ["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", …]
//     Test Suites: 1 failed, 1 total
//     Tests:       1 failed, 1 total

const secretCode = (string) => {
    let four = /a/ig
    let three = /e/ig
    let one = /i/ig
    let zero = /o/ig
    return string.replaceAll(four, 4).replaceAll(three, 3).replaceAll(one, 1).replaceAll(zero, 0)
}
/*
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
I looked up if there was a way to replace a character with a number. 
My search led me to the built-in method .replaceAll()
.replaceAll() returns a string with all matches of a pattern that can be replaced by a replacement. 
The pattern being used is regex, or regular expressions, in order to find each instance of the argument and replaced with a number.
I am sure there is a way to make this code efficient, but I am unable to figure out a way to solve that issue.
*/

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordSearch", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("returns an array of all the words containing that particular letter", () => {
        expect(wordSearch(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordSearch(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
    })

    // ReferenceError: wordSearch is not defined
//     Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total


// b) Create the function that makes the test pass.

/*
Create a function named wordSearch.
The function will take in two parameters named array and letter.
The argument that will be passed into the parameter array will be an array of words.
The argument that will be passed into the parameter array will be variable that will contain one character inside of a string.
Using the .filter() method, you can use the variable as the call back function
The function will return a new array that contains only the words that match the character
*/
const wordSearch = (array, letter) => {
    return array.filter((value) => value.toLowerCase().includes(letter.toLowerCase()))
}
/*
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Reading the documentation on the .filter() method, there is an example of how to use the method to find a string to uses the filter criteria and push it into a new array.
Using the .toLowerCase() method, I converted all of the strings inside of the array to lowercase in order to ensure that the search parameter will match the character regardless if it was originally uppercase or lowercase.
*/

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.



describe("fullHouse", () => {
    it("determines whether or not the array is a full house A full house is exactly one pair and one three of a kind", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
    })

    // ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

/*
Create a function named fullHouse
The function will have one parameter named array
The argument that will be passed into the parameter is an array containing 5 numbers
Find a way to iterate through the array and ensure 3 numbers are the same
Find a way to iterate through the array and ensure 2 numbers are the same
return a boolean value
*/

const fullHouse = (array) => {
    //use .sort to ensure numbers are sorted least to greatest
    //compare values to see if they match each other
    array.sort((a, b) => a - b)
    //iterate through the array
    for (let i = 0; i < array.length; i++) {
        // since there are only five integers, you would need the first three intergers and last two integers to match
        if (array[0] === array[2] && array[3] === array[4]) {
            return true
            // on the other hand, in order to make another true statement you would need the first two integers and the last three integers to match
        } else if (array[0] === array[1] && array[2] === array[4]) {
            return true
            //if you don't have a matching pair and three of a kind, you would return false
        } else {
            return false
        }
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total