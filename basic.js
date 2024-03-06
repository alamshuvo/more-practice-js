// template string 
const name="iftakhar alam";
const fatharName="Nurul Abser";
const motherName="jobaida naher";
const siblingsName="jenia afrin";
const about =` My name is ${name}. My father name is ${fatharName},and my mother name is ${motherName} I have a one sister her name is ${siblingsName}.`;
// console.log(about);

// Arrow function 

const testing =()=>`this is ${name}`;
// console.log(testing());
const anotherTesting=(a,b)=>a+b;
// console.log(anotherTesting(10,20));
const testingThree=(a,b)=>{
    const another =(a+b)*b;
    return another
}
// console.log(testingThree(10,5));


// spreed operator

const number=[10,20,30,5,15,20];
const newNumber=[...number];
// number.push(500);
number.pop();
console.log(number);
console.log(newNumber);

