function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise :', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var sumTimes5 = addAndMultiplyBy5(10, 5);
console.log(sumTimes5);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}
var multipliedDividedFive = multiplyAndDivideBy5(35, 10);
console.log(multipliedDividedFive);

function subtractTwoNumbers(num1, num2) {
  var result = (num1 - num2);
  return result;
}
var subtractNumbersTwo = subtractTwoNumbers(22, 7);
console.log(subtractNumbersTwo);

function getCircleCircumference(radius) {
  var result = (radius * 2) * 3.141;
  return result;
}
var circleCircumference = getCircleCircumference(5);
console.log(circleCircumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  var result = number * 25;
  return result;
}
var cubey = cube(5);
console.log(cubey);
