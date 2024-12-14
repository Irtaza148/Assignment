//1
var a = 2;
var b = ++a * 2;
console.log("Q#1","b =",b);
//2
var x = 5;
var y = x-- +2 ;
console.log("Q#2","y =",y);
//3
var x = 3;
var y = ++x + x++ + ++x;
console.log("Q#3","y =",y);
//4
var m = 2;
var n = ++m * m++ * --m;
console.log("Q#4","n =",n);
//5
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log("Q#5","Result =",result);
//6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log("Q#6","p =",p);
//7
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a * (b-- + c)/--d;
console.log("Q#7","Result =",result);
//8
var m = 2;
var n = 3;
var o = 4;
var result = m++ * (--n + m)/(o-- - n);
console.log("Q#8","m =",m,"o =",o,"n = ",n,"Result = ",result);



