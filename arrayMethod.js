// foreach   method 
// foreach method sadaronoto kono array er prottekta element k loop kore and kono kisu return kore na .for each dosent create a new array and dosent return anything 

const numbers=[10,20,30,40,50,20,10,20,320];
numbers.forEach(number=>{
    const sum=number+10;
    // console.log(sum);
})



// Map method 
// Map method sadaronoto kono array er upor loop kore takhe and kono kisu return korar dorkar  hole se kono kisu return kore takhe .

const anotherNumbers=[10,20,30,40,50,60,70,80,90,100];
 const doubleNumber= anotherNumbers.map((number)=>{
    const sum=number+10;
    return (sum);
 });
    

// console.log(doubleNumber);

// apply map ,foreach ,filter, and find method on the following obj 

const student=[ 
    {name:"jhon",age:20},
    {name:"doe",age:25},
    {name:"Jane",age:30}
];
const studentName=student.map((student)=>{
    const studentName=student.name;
    return studentName;
})
// console.log(studentName);
// for each array return kore na ja ba ja cai seta kore dibe kono kisu return kore dibe na 
student.forEach((studentAge)=>{
    // console.log(studentAge.age);
})

//  filter 
 const studentAge=student.filter((student)=>student.age>=25);
//  console.log(studentAge);
   
//  filter kono akta sorto er upor depend kore j j sorto gulo full fill kore segulo sobgulo dyea dei .

const name=student.filter((student)=>student.name.includes('o'));

console.log(name);

// find 
const spacialName=student.find((student)=>student.name.includes('o'));
console.log(spacialName);

// find spacipic kono array er element k dei but filter akta array return kore takhe .