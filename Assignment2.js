//Question 1
let age=25;
let is_Adult;
if (age>=18){
    is_Adult=true;
}else{
    is_Adult=false;
}
console.log(is_Adult);

//Question 2
let x=10;
let y=5;
console.log(x+y);
console.log(x*y);
console.log(x%y);

//Question 3
let n=prompt("Enter a number: ");
let res;
if (n%2==0){
    res="Even";
}else{  
    res="Odd";
};
console.log(res);

//Question 4
let arr=[];
for (let i=1;i<=5;i++){
    arr.push(i);
}
console.log(arr);

//Question 5
function square(){
    let n=prompt("Enter a number: ");
    console.log(n*n);
}
square();