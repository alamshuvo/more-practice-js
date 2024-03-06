// Array and obj destracturing 

const numbers=[10,20,30];
const [a,b,c]=numbers;
// console.log(j);
// array distructre korte hole sadaronoto index tikh rakha lage index tikh rekeh distructre kora jai .

const another=(num1,num2)=>{
    const numbers=[num1,num2];
    return numbers;
}
const [f,t]=another(20,30);
// console.log(f);
// console.log(t);


const student={
    name:"iftakhar alam",
    age:22,
    id:122222,
    marks:{bangla:59,english:96,math:100},
    subject:["bangla","english","math"],
                
}

const [subject1,subject2,subject3] =student.subject;
// console.log(subject1);
// console.log(subject2);
// console.log(subject3);
const {bangla,english} =student.marks;
console.log(bangla);
console.log(english);