// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function srectangle (a,b) {
//     let result = (a + b)*2
//     return result
//
// }
// srectangle(10,20)
//
// let rectangle = srectangle(10,20)
// console.log(rectangle)




// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function scircle ( r ){
//     let result = (Math.PI * r**2);
//       return result;
// }
// scircle(30)
// let circle = scircle(30)
// console.log(circle)

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function scylinder (h,r){
//     let result = (2 * Math.PI * h * r)
//     return result
// }
// scylinder(10,2)
// let cylinder = scylinder(10,20)
// console.log(cylinder)


// створити функцію яка приймає масив та виводить кожен його елемент


// function arr (users){
//     for (const user of users) {
//         console.log(user)
//     }
// }
// arr( users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//  ])



// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text){
//     document.write(`<p>${text}</p>`)
// }
// paragraph (`hello`)



// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function li (text){
//
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// li(`hello world`)


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulk(text,count){
//
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ulk('hello!!!',3)



// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [20, 'hello', false, true]
//
// function abc (arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// abc([20,'hello',false,true])



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

// #Nomber1

//
// function abc (arr){
//     for (let i = 0; i < arr.length; i++) {
//
//         document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//     }
// }
// abc(users)

// #Nomber2

// function abc(arr){
//     for (const arrElement of arr) {
//         for (const fieldName in arrElement ) {
//             console.log(fieldName,arrElement[fieldName])
//         }
//         console.log('')
//
//     }
// }
//
//
// abc(users)



// створити функцію яка повертає найменьше число з масиву


// function number (a,b,c,){
//     if (a<c){
//        console.log(a)
//     }
// else if (a<b){
//     console.log(a)
//     }
// else (!! '')
// }
// number(10,20,45,)


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,10,15]
//
// let calculator = (a,b,c,d) => {
//     let result = a + b + c + d
//     console.log(result)
//     return result
// }
// calculator(1,2,10,15)

