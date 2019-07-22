
//Reverse string
const reverseString = function reverseString(str){
 let strArr = str.split('').reverse().join('');
 return strArr;
}

console.log(reverseString("hello"));

//Factorialize
function factorialize(num) {
    let result = 1;
    for(let i=1; i<= num; i++) {
        result *= i;
       
    }
    return result;
}

factorialize(6);






