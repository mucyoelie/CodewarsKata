//destructuring object
let person = {
    name: "Mucyo",
    age:20,
    address:"kigali,kanombe"
}
let {name,age,address} = person;
console.log(name,age,address);
//array destructuring
let persons = ["Mucyo",20,"Kigali,Kanombe"]
let [a,b,c] = persons
console.log(a,b,c);
//swap variable using Destructuring
let numbers = [1,3]
let [x,y] = numbers;
numbers = [y,x];
console.log(numbers)
//speard Operator
let arr1 = [4,6,8];
let arr2 = [...arr1,1,2,3];
console.log(arr2)
//spread operator
const MergeArray = (num1,num2) => {
    let result = [...num1,...num2].sort((a,b) => a - b).join('');
    return [...new Set(result)];
}
console.log(MergeArray([3,5,4,7],[1,6,2,7,5]))