// ? 12. verilmis ededi reqemlerine ayiran proqram tertib edin
// function reqemleriayir(text) {
//     text= text.toString()
//     const arr=[]
//     for (let i = 0; i < text.length; i++) {
//        arr.push(text[i])
//     }
//     return arr
// }
// console.log(reqemleriayir(34566));

//? 13. ededin reqemlerinden en boyuyunu tap
// function reqemboyuktap(text) {
//   text = text.toString();
//   text = text.split("");
//   let max = text[0];
//   for (let i = 0; i < text.length; i++) {
//     if (max < text[i]) {
//       max = text[i];
//     }
//   }
//   return max;
// }
// console.log(reqemboyuktap(12345));

//? 14. ededin reqemlerinden en kiciyini tap
// function reqemkiciktap(text) {
//   text = text.toString();
//   text = text.split("");
//   let min = text[0];
//   for (let i = 0; i < text.length; i++) {
//     if (min > text[i]) {
//       min = text[i];
//     }
//   }
//   return min;
// }
// console.log(reqemkiciktap(12345));

//? 15. ededin reqemlerinin cemi hasili ededi ortasini tapan proqram
// function tap(number) {
//   number = number.toString();
//   let sum = 0;
//   let hasil = 1;
//   let arr = [];
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//     hasil *= number[i];
//     edediorta = sum / number.length;
//   }
//   arr.push(sum, hasil, edediorta);
//   return arr
// }
// console.log(tap(12345));

//? 16. Ededin butun bolenlerini tapan proqram
// function bolenlerinitap(eded) {
//     const arrbolenler=[];
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             arrbolenler.push(i)
//         }
//     }
//     return arrbolenler;
// }
// console.log(bolenlerinitap(12));

//? 17. Ededin butun bolenlerinin sayini tapan proqram
// function sayitap(eded) {
//     let count = 0
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             count++
//         } 
//     }
//     return count
// }
// console.log(sayitap(12));

//? 18. Ededin butun bolenlerinin cemini ve hasilini tapan proqram
// function sumhasiltap(eded) {
//     let sum = 0
//     let hasil = 1
//     let arr = []
//     for (let i = 0; i <= eded; i++) {
//         if (eded % i === 0) {
//             sum += i
//             hasil *= i
//         }
//     }
//     arr.push(sum, hasil)
//     return arr
// }
// console.log(sumhasiltap(12));

//?20. Ededin sade ve ya murekkeb oldugunu tapan proqram
// function sademurekkebtap(number) {
//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return console.log("murekkebdir");
//         }

//     }
//     return console.log("sadedir");
// }
// console.log(sademurekkebtap(13));


//? 26. Massivin tek elementlerinin indexsini ekrana cixaran proqram
// function indextap(...params) {
//     const arr=[]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2!==0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(indextap(11,56,35,71,22,67)); //0 2 3 5

//? 27. Massivin cut elementlerinin indexsini ekrana cixaran proqram
// function indextap(...params) {
//     const arr=[]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2===0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(indextap(11,56,35,71,22,67)); // 1 4

//? 28. Massivin tek indeksli elementlerini ekrana cixaran proqram
// function elementtap(...params) {
//     const arr = []
//     for (let i = 0; i < params.length; i++) {
//         if (i % 2 !== 0) {
//             arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(elementtap(78, 44, 67, 22, 54)); //44 22

//? 29. Massivin cut  indeksli elementlerini ekrana cixaran proqram
// function elementtap(...params) {
//     const arr = []
//     for (let i = 0; i < params.length; i++) {  // 0i cut goturmesin deye i=1 yazmaq lazimdir
//         if (i % 2 === 0) {
//              arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(elementtap(78, 44, 67, 22, 54)); //78 67 54

//? 30. Massivin en boyuk elementini ekrana cixaran proqram
// function maxtap(...params) {
//     let maxnum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (maxnum < params[i]) {
//             maxnum = params[i]
//         }
//     }
//     return maxnum
// }
// console.log(maxtap(12, 2, 45, 78, 14, 99));

//? 31. Massivin en kicik elementini ekrana cixaran proqram
// function mintap(...params) {
//     let minnum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (minnum > params[i]) {
//             minnum = params[i]
//         }
//     }
//     return minnum
// }
// console.log(mintap(12, 2, 45, 78, 14, 99));


