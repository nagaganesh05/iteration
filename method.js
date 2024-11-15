

//  1. Calculate Product of All Items: For an array of order quantities [1, 3, 5, 2], calculate the product ofall quantities to determine total inventory.

let arr = [1,3,5,2];
let newArr = arr.reduce((prev,curr)=>prev*curr,1)
console.log(newArr);


// 2. Find Words Ending with 'e': In a list of fruit names ['apple', 'orange', 'mango'], filter out fruits ending with the letter 'e' for display.

// let fruits = ['apple','orange','mango'];
// let fruitsEndinge = fruits.filter((fruit)=>fruit.endsWith('e'))
// console.log(fruitsEndinge)

let fruits = ['apple','orange','mango'];
let fruitsEndinge = fruits.filter((fruit)=>fruit.charAt(fruit.length-1)=='e')
console.log(fruitsEndinge)


// 3. Create Full Name and Age String: You have records of employees [{'name': 'John', age: 25},{'name': 'Jane', age: 30}]

let obj = [{name: 'John', age: 25},{name: 'Jane', age: 30}];
let newObj = obj.map((name)=>{return name.name+'-'+name.age})
console.log(newObj)

//  4. Find Last Even Number: From a series of ticket sales [12, 19, 24, 37, 48], find the last even number in the list for reporting



let ticketSales = [12,19,24,27,48];
let findEven = ticketSales.findLast((value)=>value%2==0);
console.log(findEven)



// 5. Check for 4-Letter Words: In an array of items ['desk', 'table', 'lamp'], check if any item has exactly 4 letters to validate the name length.

let items = ['desk', 'table', 'lamp'];
let fourLetter = items.find((value)=>value.length==4)
console.log(fourLetter)




// 1. Average Salary: From [45000, 52000, 61000, 72000], calculate the average salary to determine the company's median compensation.


let salary = [45000, 52000, 61000, 72000];
let sum = salary.reduce((pre,curr)=>pre+curr,0)
let average = sum/salary.length
console.log(average)


// 2. Create Book Description: Given ['Modern JavaScript', 'Advanced CSS', 'React Basics'], combine these into a single sentence for a library catalog.


let books = ['Modern JavaScript', 'Advanced CSS', 'React Basics'].reduce((prev,curr)=>prev+" "+curr)
console.log(books)





// 3. Adult Students' Names: From [{'name': 'John', age: 16}, {'name': 'Doe', age: 22}], create a list of names for students over 18 only.



let students = [{'name': 'John', age: 16}, {'name': 'Doe', age: 22}]
let over18 = students.filter((values)=>values.age>18).map((names)=>names.name)
console.log(over18)



// 4. Calculate Factorial of Numbers: For [1, 2, 3, 4], create a new array where each element is its factorial.


let num = [1, 2, 3, 4];
function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}
let factorialArray = num.map((value)=>factorial(value))
console.log(factorialArray)










