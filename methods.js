// 1. Employee Salary Update: You have a list of employee salaries [30000, 45000, 50000, 35000]. Increase each salary by 10% and create a new array with the updated salaries.  

let arr = [30000, 45000, 50000, 35000];
let newArr = arr.map((value,index)=> {
    return value+(value*0.1);
})
console.log(newArr)




// 2 Odd Numbers Only: Given an array of daily sales numbers [23, 45, 60, 70, 33], filter out only the odd sales numbers to analyze specific buying patterns.  



let sales =[23,45,60,70,33];
let dailySales = sales.filter((num)=>num&1)
console.log(dailySales)


// 3. Product Price Tag Update: You have a list of product names in lowercase ['soap', 'shampoo', 'toothpaste']. Capitalize each product name to display on tags.           


let products = ['soap', 'shampoo', 'toothpaste'];
let prod = products.map(name => name.toUpperCase())
console.log(prod)




let products1 = ['soap', 'shampoo', 'toothpaste'];
let prod1 = products1.map((name) => name.charAt(0).toUpperCase()+name.slice(1))
console.log(prod1)


// 4 Student Passing Scores: From an array of student scores [55, 70, 82, 47], filter out scores that are above 50 to get a list of students who passed.  


let scores = [55,70,82,47];
let passingScores = scores.filter((value)=>value>=50)
console.log(passingScores)



// 5. Customer Names Extraction: You have an array of customer records [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}]. Extract just the names for a promotional email list.


let names =  [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}];
let namesExtract = names.map((names)=> names.name);
console.log(namesExtract)



