//ex.1 - FOR LOOPS:
// function number1(){
//     for(let i = 0; i <11; i++){
//         console.log(i);
//     }
// }
// number1();
// function number2(){
//     for(let i =0; i<11; i+=2){
//             console.log(i);
//     }
// }
// number2();

// function number3(x){
//     for(let i = 2; i<(x+1); i+=2){
//         console.log(i)

//     }
// }
// number3(15);

// function number4(){
// for(let i = 1; i <=20; i++){
//     if(i==13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
// }
// number4();
// function number5(){
//     for(let i =10; i<=0; i--){
//         console.log(i);
//     }
// }
// number5();
// function number6(){
//     for(let i = 1; i<=10; i+=1){
//         if(i !=7){
//             console.log(i);
//         }
//         else{
//             break;
//         }

//     }
// }
// number6();

// function number7(){
//     const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2];
//     for(let i =0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }

// number7();
// function number8(){
// const array = [1,2,3,4,5];
// for(let i = 0; i<array.length; i++){
//     if(array[i]%2==0){
//         console.log(array[i]);
//     }
//     else{
//         continue;
//     }
// }
// }
// number8();

// function number9(array){
//     let sum=0;
//     for(let i = 0; i<array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum);
    
// }
// number9([1,2,3,4,5]);

// function number10(array){
//     let sum=0;
//     for(let i = 0; i<array.length; i++){
//         sum = array.length;
//         console.log(sum);

//     }
// }
// function number11(){
//     let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
//     let even = [];
//     let odd = [];
//     for (let i = 0;i < array.length; i++){
//         if(array[i] % 2 == 0){
//             even.push(array[i]);
//         }
//         else{
//             odd.push(array[i]);
//         }
//     }
//     console.log(even, odd);
    
// // }
// // number11();
// function number12(str){
//     // let str = "hello";
//     for (let i = 0;i< str.length; i++){
//         if(str.indexOf("y") != -1){
//             console.log("yes");
//         }
//         else{
//             console.log("no");
//         }
//     }
// }
// number12("yahli");

// //EX2 -WHILE PRACTICE
// let startingFuelLevel;
// let numAstronautsAboard;
// let altitude;
// // function number13(){
// //     let num = 0;
// //     while (num<=10){
// //         console.log(num);
// //         num++;
// //     }
// // }
// // number13();
// function number14(){
//     let num = 2;
//     while(num <=10){
//         console.log(num);
//         num=+2;
//     }

// }
// number14();
// function number15(){
//     let num = 1;
//     while(num <=10){
//         console.log(num);
//         num=+2;
//     }

// }
// number15();
// function number16(){
//     let num = 10;
//     while(num <=1){
//         console.log(num);
//         num++;
//     }

// }
// number16();
// function number17(){
//     let num = prompt("Please enter number");
//     let i = 1;
//     while(i<=num){
//          console.log(i);
//           i++;6
//     }
// }
// number17(5);
// function number18(){
//     let num = prompt("Please enter number");
//     let i = 1;
//     let sum = 0;
//     while(i<=num){
//         sum +=i;
//           i++;
//     }
//     console.log(sum);
// }   
// number18();
// function number19(){
//     let num = prompt("Please enter number");
//     let i = 1;
//     let factorial = 1;
//     while(i<=num){
//         factorial = factorial * i;
//           i++;
//     }
//     console.log(factorial);
// }   
// number19();
// function number20(){
//     let num = prompt("enter the starting fuel level");
//     while(5000>num || num>30000){
//         num =  prompt("enter the starting fuel level");
//           break;
//     }
// }  
// number20();

//EX3 - Nested Loops
function number21(){
    let symbol = "";
    for(let i = 1; i<=5; i++){
        symbol += "*";
       console.log(symbol);
    }
}
number21()

function number22(){
    let number = "";
    for(let i = 1; i<=10; i++)
        for(let j = 1; j<=10; j++){
            number +=(`${i*j} ` );
        }

console.log(number);
}
number22();