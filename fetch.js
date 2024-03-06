const student={
    name:"iftakhar alam",
    age:25,
    isPassed:'true',
}

const keys=Object.keys(student);
const values=Object.values(student);
console.log(values);
console.log(keys);
const studentJson=JSON.stringify(student);
// console.log(student);
// console.log(studentJson);
const StudentObj=JSON.parse(studentJson);
// console.log( StudentObj.age);

const products=[
    {name:"iphone",price:5000,color:'black'},
    {name:"sem",price:5000,color:'orange'},
    {name:"lenovo",price:5000,color:'red'},
    {name:"oppo",price:5000,color:'white'}
];
const newProduct={name:"mototorola",price:50000,color:"gray"};
console.log(products);
const newProducts=[...products,newProduct];
console.log(newProducts);

const remaining=newProducts.filter(product=>product.name !== "sem" && product.color !=="red");
console.log(remaining);