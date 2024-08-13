console.log("============function with no arguments and  no return value==========");
function show(){
    console.log("inside show function");
}
show();//function call or invoke


console.log("===========function with arguments and no return values================");


function multiply(n1,n2){
console.log("Given number:",n1,n2);
var res=n2*n1;
console.log("result of res =",res);
}
multiply(10,20);
multiply(8,20);
multiply(22 ,10 ,20); 
multiply(10);
console.log("===========function with no arguments and  return values================");
function demo(){
    console.log("inside function demo");

return "Good Morning ";
}
var result=demo();
console.log(result);
function square(num){
   console.log("Given number is :",num); 
    var result=num*num;
    return result;

}
 var returnvalue =square(5)
 console.log("square  is:",returnvalue);

 var returnvalue =square(12)
 console.log("square  is:",returnvalue);
