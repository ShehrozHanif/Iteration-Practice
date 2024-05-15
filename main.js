"use strict";
//  let arr1:any[] = [1,2,3,4,5,6,7,8,9,10]
Object.defineProperty(exports, "__esModule", { value: true });
// for(let i = 0; i < arr1.length; i++){
//     let suffix = "th"
//     if(arr1[i] === "1"){
//         suffix = "st"
//     }else if(arr1[i] === 2){
//         suffix = "nd"
//     }else if(arr1[i] === 3){
//         suffix = "rd"
//     }else{
//         suffix = "th"
//     }
//     console.log(arr1[i]+suffix)
// }
// let cities:string[] = ["karachi","faislabad","Islamabad","peshawar"];
// let rank:string[] = ["th","st","nd","rd"];
// for(let i = 0;  i<cities.length && i < rank.length; i++){
//     const choice= (i + 1).toString() + rank[i];
//     console.log(`My ${choice} is ${cities[i]}`)
// }
// let cities: string[] = ["karachi", "faislabad", "Islamabad", "peshawar"];
// let rank: string[] = ["th", "st", "nd", "rd"];
// for (let i = 0; i < cities.length; i++) {
//     console.log(`My ${i + 1}${rank[i]} choice is ${cities[i]}`);
// }
// const cities: string[] = ["karachi", "faislabad", "Islamabad", "peshawar"];
// const rank: string[] = ["th", "st", "nd", "rd"];
// cities.forEach((city, index) => {
//     console.log(`My ${index + 1}${rank[index]} choice is ${city}`);
// });
// const cities: string[] = ["karachi", "faislabad", "Islamabad", "peshawar"];
// const rank: string[] = ["th", "st", "nd", "rd"];
// for (let i = 0; i < cities.length; i++) {
//     const ordinal = (i + 1).toString() + getOrdinalSuffix(i + 1);
//     console.log(`My ${ordinal} choice is ${cities[i]}`);
// }
// function getOrdinalSuffix(num: number): string {
//     if (num === 1) {
//         return "st";
//     } else if (num === 2) {
//         return "nd";
//     } else if (num === 3) {
//         return "rd";
//     } else {
//         return "th";
//     }
// }
// let a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]
// var unionArray = [...new Set(a.concat(b))];
// console.log(unionArray)
// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let common1:[] = [];
// let nikalo = [...new Set([...arr1, ...common1])]
// console.log(nikalo)
// let aar2 = new Array("Shehroz","Shahmeer")
// console.log(`arr2 ${aar2}`)
// let arr3 = Array.of("sid","shah");
// console.log(`arr3 ${arr3}`)
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];
for (var i = 0; i < aCities.length; i++) {
    var choiceSuffix = (i + 1) <= 3 ? o[i + 1] : o[0]; /* in this case (i + 1) = 1 because iteration start with zero hence(0+1)=1 then if this 1 < 3 then
       o which is 2nd array o[i+1] = 1 its means when iteration start or if its fit on this condition which is is less than 3 then
       o[] apply and you can see when its dont apply then zero index apply which is "th" */
    console.log(`${i + 1}${choiceSuffix} choice is ${aCities[i]}`);
}
// i Want to know the difference between these two
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// for (var i = 0; i < aCities.length && i < o.length; i++) {
//     var choice = (i + 1) + o[i];
//     console.log(choice + " choice is " + aCities[i]);
// }
