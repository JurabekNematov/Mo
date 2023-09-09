// //======= Convert minutes to sec ======== 

// function minsToSec(min) {

//   var sec = (min * 60);

//   return sec;
// };
// console.log(minsToSec());

// //======= zero to the end of array ==========

// var numbers = [1, 3, 0, 5, 0, 7, 0];
// var result = [];

// function zeroEnd(){

//   for (const num of numbers) {
//     if(num == 0) {
//       result.push(num);
//     } else {
//       result.unshift(num);
//     }
//   }
//   return result;
// }
// console.log(zeroEnd(numbers).join(""));

// //======== Math.abs add Math.abs function ========

// var numbers = [1, 2, 0, -1, -2, 3, 4]
// var arr = 0;
// function additionAbsNumbers(){
//   for (const num of numbers) {
//     if(num > 0) {
//       arr = num + arr;
//     } 
//   }
//   return arr;
// }
// console.log(additionAbsNumbers(numbers));

// //======= Count Boolean(true) =======

// var trueyType = [false, true, false, true, true];
// var output = [];
// function countTrue(){
//   for (const item of trueyType) {
//     if(item == true) {
//       output.push(item);
//     } 
//   }
//   return output;
// }
// console.log(countTrue(trueyType).length);


// //======= Find Highest Price Name ========

// var list = [{name: "Ali", price:200},{name: "Jo'rabek", price: 800},{name: "Sardor", price: 400}];
// var highestPriceName = "";
// var highestPrice = 0;
// function findHighestPriceName(){
//   for (const item of list) {
//     if(item.price > highestPrice){
//       highestPrice = item.price;
//       highestPriceName = item.name;
//     }
//   }
//   return highestPriceName;
// }
// console.log(findHighestPriceName(list));