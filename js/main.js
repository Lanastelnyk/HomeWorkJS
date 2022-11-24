// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// function abc(text,number){
//    document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//
//         document.write(`<li>${text}</li>`)
//     }
//
//
//   document.write(`</ul>`)
// }
// abc('hi',3)


// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function abc(array){
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//
//         document.write(`<li>${array[i]}</li>`)
//     }
// }
// abc([1,4,'hi',false])

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
 //    {id:1,name: 'vasya', age: 31 },
 //    {id:2,name: 'petya', age: 30 },
 //    {id:3,name: 'kolya', age: 29},
 //    {id:4,name: 'max', age: 30 },
 //    {id:5,name: 'oleg', age: 28 },
 //    {id:6,name: 'andrey', age: 29},
 //    {id:7,name: 'masha', age: 30 },
 //    {id:8,name: 'olya', age: 31 },
 //    {id:9,name: 'max', age: 31 }
 // ]

// function abc (arr){
//     for (let i = 0; i < arr.length; i++) {
//
//         document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//     }
// }
// abc(users)


// створити функцію яка повертає найменьше число з масиву

let archik = [9,-3,2,3,5]

function min(array){
    let min = array[0];
    for (const minElement of array) {
       if(minElement < min){
           min = minElement
       }
    }
    return min
}
document.write(min(archik))



// function abc (arr){
// let result = Math.min(arr)
// console.log(result)
// }
// abc(3,0,7,5)

// function abc(a,b,c){
//     if(a<b && a<c){
//         console.log(a)
//     }else if (b<a && b<c){
//         console.log(b)
//     }else if (c<a && c<b){
//         console.log(c)
//     }
// }
// abc(8,10,2)

// function abc(a,b,c){
//     if(a>b && a>c){
//         console.log(a)
//     }else if (b>a && b>c){
//         console.log(b)
//     }else if (c>a && c>b){
//         console.log(c)
//     }
// }
// abc(16,10,55)
