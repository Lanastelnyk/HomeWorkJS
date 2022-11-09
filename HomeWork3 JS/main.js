
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 100;
console.log(x);
if(x !== 0){
    console.log(true);
}else {
    console.log(false);
}


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let chvert
// let time = prompt('input digit')
//
//
// if(time >= 0 && time<= 14){
//     chvert = 'Persha chvert'
// }
// else if (time >= 15 && time<= 29){
//     chvert = 'Druga chvert'
// }
// else if (time >= 30 && time<= 44){
//     chvert = 'Tretya chvert'
// }
// else if (time >= 45 && time<= 60){
//     chvert = 'Chitverta chvert'
// } else {
//     chvert = 'Wrong input'
// }
// console.log(chvert)

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let decada
// let day = 17
//
// if (day >=0 && day <=9){
//     decada = 'Persha decada'
// }
// else if (day >=10 && day <=19){
//     decada = 'Druga decada'
// }
//
// else if (day >=20 && day <=31){
//     decada = 'Tretya  decada'
// }
//
// else {
//      decada = 'Wrong input'
// }
//
//  console.log (decada)


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день


// let name_of_day
// let day = prompt('enter day');
//
// switch (day) {
//     case '1':
//         name_of_day = ('monday');
//         break;
//     case '2':
//         name_of_day = ('thursday')
//         break;
//     case '3':
//         name_of_day = ('wednesday')
//         break;
//     case '4':
//         name_of_day = ('tuesday')
//         break;
//     case '5':
//         name_of_day = ('friday')
//     case '6':
//         name_of_day = ('saturday')
//     case '7':
//         name_of_day = ('sunday')
// }
// console.log(name_of_day)


// -Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.

// let num_1 = 10
// let  num_2 =20
// if (num_1 > num_2){
//     console.log(num_1)
// }
// else  if (num_2 > num_1){
//     console.log(num_2)
// }
// else if (num_2 === num_1){
//     console.log('same')
// }
// else {
//     console.log('Wrong enter')
// }



// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)





let sex = prompt('please enter your sex,letter m or f')
if (sex === 'm'){
    sex = 'male'
}else if(sex ==='f'){
    sex ='female'
}else{
    sex = false
}
let real_sex = sex || 'undefind'
console.log(real_sex)


