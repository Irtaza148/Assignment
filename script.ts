//age
var mydateofbirth = 2005;
var currentyear = 2024;
var myage = currentyear - mydateofbirth;
console.log("Age = ", myage, "years");

//Area of Rectangle
var length = 20;
var width = 10;
var areaofrectangle = length * width;
console.log("Area of Rectangle =", areaofrectangle);

//Area of Circle
var radiusofcircle = 20;
var pi = 3.14159;
var areaofcircle = pi * radiusofcircle ** 2;
console.log("Area of Circle = ", areaofcircle);

//Area of Cube
var lengthofside = 10;
var areaofcube = 6 * lengthofside ** 2;
console.log("Area of Cube = ", areaofcube);

//Temp. fahrenheit to celsius
var fahrenheit = 100;
var celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Temperature in Celsius = ", celsius, "Degree Celsius");

//Temp. Celsius to fahrenheit
var celsius = 45;
var fahrenheit = (celsius * 9) / 5 + 32;
console.log("Temperature in fahrenheit = ", fahrenheit, "Degree fahrenheit");

//Seconds into Mins
var Seconds = 300;
var minutes = Seconds / 60;
console.log("Minutes = ", minutes, "min");

//Percentage
var totalmarks = 1100;
var obtainedmarks = 850;
var percentage = (obtainedmarks / totalmarks) * 100;
console.log("Percentage =", percentage, "%");

//1
var a = 2;
var b = ++a * 2;
console.log("Q#1", "b =", b);
//2
var x = 5;
var y = x-- + 2;
console.log("Q#2", "y =", y);
//3
var x = 3;
var y = ++x + x++ + ++x;
console.log("Q#3", "y =", y);
//4
var m = 2;
var n = ++m * m++ * --m;
console.log("Q#4", "n =", n);
//5
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log("Q#5", "Result =", result);
//6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log("Q#6", "p =", p);
//7
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = (++a * (b-- + c)) / --d;
console.log("Q#7", "Result =", result);
//8
var m = 2;
var n = 3;
var o = 4;
var result = (m++ * (--n + m)) / (o-- - n);
console.log("Q#8", "m =", m, "o =", o, "n = ", n, "Result = ", result);
