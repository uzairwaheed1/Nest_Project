function x(){
    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }

    console.log("Hello World");
}
x();

// function y(){
//     for(let i=1;i<=5;i++){}
// }

// Example: Callback Function
function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback(); // Call the callback function
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye); // 'Hello, Alice!' then 'Goodbye!'

// Example: Higher Order Function
function operateOnNumbers(arr, operation) {
    // operation is a function passed as an argument
    return arr.map(operation);
}

function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
console.log('Squares:', operateOnNumbers(numbers, square)); // [1, 4, 9, 16, 25]
console.log('Doubles:', operateOnNumbers(numbers, double)); // [2, 4, 6, 8, 10]