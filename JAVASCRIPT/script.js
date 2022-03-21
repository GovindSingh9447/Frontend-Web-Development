console.log("Hello Github");


const pi=3.14;
//pi=3.12;

console.log(pi);

//DATATYPE

//premitive datatype

let name='Happy Day';
let age='11';
console.log(name);
console.log(age);

let option=true;
let height;

console.log(option);
console.log(height);


//ARRAY

let shopping=[];
shopping=['paintBrush','color boot', 'paint note'];
console.log(shopping);
console.log(shopping[2]);


let numbers=[];
numbers=[1,2,3,4,5,6,7,8,9];
console.log(numbers[3]+numbers[7]);
console.log(numbers.sort());
numbers.push(10);


//OBJECT

let pen={
    type:'ballpoint',
    color:'black',
    cost:10
};

//SYNTEX OF ACCESING OBJECT

//OBJECTNAME.PROPERTYNAME
//OBJECTNAME['PROPERTYNAME']

console.log(pen.cost);
console.log(pen.color);


//example

let unda={
    age:18,
    school:'St. Pauls High Schhol',
    class:'10th',
    subject:['phy','chem','Bio','Hindi']
};

console.log(unda.school);
console.log(unda.subject[2]);

//FUNCTION

function hello(){
    console.log("hello");
}
hello();

function product(a,b){
    return a*b;
}
let x=product(12,5);
console.log(x);

//conditional statements

let num=[];
num=[1,3,5,3,1,2];
if(num[0]==num[2]){
    console.log('correct');
}

if(num[0]==num[4]){
    console.log('good to go');
}
else{
    console.log("try again");
}

//loop

