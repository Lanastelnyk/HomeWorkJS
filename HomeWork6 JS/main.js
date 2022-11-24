// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.length)


// let str = 'lorem ipsum'
// console.log(str.length)

// let str = 'javascript is cool'
// console.log(str.length)



// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// let toUpperCase = str.toUpperCase()
// console.log(toUpperCase)
// let toLowerCase = toUpperCase.toLowerCase()
// console.log(toLowerCase)




// let str = 'lorem ipsum'
// let toUpperCase = str.toUpperCase()
// console.log(toUpperCase)
// let toLowerCase = toUpperCase.toLowerCase()
// console.log( toLowerCase)



// let str ='javascript is cool'
// let toUpperCase = str.toUpperCase()
// console.log(toUpperCase)
// let toLowerCase = toUpperCase.toLowerCase()
// console.log(toLowerCase)




// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD'
// let toLowerCase = str.toLowerCase()
// console.log(toLowerCase)


// let str = 'LOREM IPSUM'
// let toLowerCase = str.toLowerCase()
// console.log(toLowerCase)


// let str = 'JAVASCRIPT IS COOL'
// let toLowerCase = str.toLowerCase()
// console.log(toLowerCase)


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.



// let str = ' dirty string   '
// console.log(str.length)
// let clean = str.trim()
// console.log(clean)
// console.log(clean.length)



// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']



// let str = 'Ревуть воли як ясла повні'
// let abc = str.split(' ')
// console.log(abc)



// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let str = arr.map(value =>value + '' )
// console.log(str)


// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3,22]
// nums.forEach((items) =>console.log(items))
//     function ascending(direction){
// }
//
//    function sortNums(a,b){
//     if(a>b) return 1
//        if (a<b) return -1
//        if(a===b) return 0
//    }
// nums.sort(sortNums)
// console.log(nums)


// let nums = [11,21,3,1]
// function sortNums  (a,b){
//     if(a>b) return -1
//     if (a<b) return 1
//     if (a===b) return 0
// }
// nums.sort(sortNums)
// console.log(nums)


// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // coursesAndDurationArray.forEach (valueItem=>console.log(valueItem))
// function sortItem(a,b){
//     return b.monthDuration - a.monthDuration
//
// }
// // coursesAndDurationArray.sort(sortItem)
// let sortmonthDuration = coursesAndDurationArray.sort(sortItem)
// console.log(sortmonthDuration)



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let filter = coursesAndDurationArray .filter((item =>item.monthDuration > 5))
// console.log(filter)



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let arr = [
//     {cardSuit:'spade', value:'6',color:`black`},
//     {cardSuit:'spade', value:'7',color:'black'},
//     {cardSuit:'spade', value:'8',color:'black'},
//     {cardSuit:'spade', value:'9',color:'black'},
//     {cardSuit:'spade', value:'10',color:'black'},
//     {cardSuit:'diamond',value:'6',color:'red'},
//     {cardSuit:'diamond',value:'7',color:'red'},
//     {cardSuit:'diamond',value:'8',color:'red'},
//     {cardSuit:'diamond',value:'9',color:'red'},
//     {cardSuit:'diamond',value:'10',color:'red'},
//     {cardSuit:'heart',value:'6',color:'red'},
//     {cardSuit:'heart',value:'7',color:'red'},
//     {cardSuit:'heart',value:'8',color:'red'},
//     {cardSuit:'heart',value:'9',color:'red'},
//     {cardSuit:'heart',value:'10',color:'red'},
//     {cardSuit:'clubs',value:'6',color:'black'},
//     {cardSuit:'clubs',value:'7',color:'black'},
//     {cardSuit:'clubs',value:'8',color:'black'},
//     {cardSuit:'clubs',value:'9',color:'black'},
//     {cardSuit:'clubs',value:'10',color:'black'},
//     {cardSuit:'spade', value:'ace',color:`black`},
//     {cardSuit:'diamond', value:'ace',color:`red`},
//     {cardSuit:'heart', value:'ace',color:`red`},
//     {cardSuit:'clubs', value:'ace',color:`black`},
//     {cardSuit:'spade', value:'jack',color:`black`},
//     {cardSuit:'diamond', value:'jack',color:`red`},
//     {cardSuit:'heart', value:'jack',color:`red`},
//     {cardSuit:'clubs', value:'jack',color:`black`},
//     {cardSuit:'spade', value:'queen',color:`black`},
//     {cardSuit:'diamond', value:'queen',color:`red`},
//     {cardSuit:'heart', value:'queen',color:`red`},
//     {cardSuit:'clubs', value:'queen',color:`black`},
//     {cardSuit:'spade', value:'king',color:`black`},
//     {cardSuit:'diamond', value:'king',color:`red`},
//     {cardSuit:'heart', value:'king',color:`red`},
//     {cardSuit:'clubs', value:'king',color:`black`},
//     {cardSuit:'spade', value:'joker',color:`black`},
//     {cardSuit:'diamond', value:'joker',color:`red`},
//     {cardSuit:'heart', value:'joker',color:`red`},
//     {cardSuit:'clubs', value:'joker',color:`black`},
// ]
// arr.forEach(item=>console.log(item))

// знайти піковий туз!!!!!!!

// let spadeAce = arr.find(item=>item.cardSuit.spade===item.value.ace)
// console.log(spadeAce)


// всі шістки!!!!!!!!
// let allSix = arr.filter(item=>item.value==='6')
// console.log(allSix)


// всі червоні карти!!!!!!!
// let redcard = arr.filter(item=>item.color==='red')
// console.log(redcard)

// всі буби!!!!!!!!
// let allDiamond = arr.filter(item=>item.cardSuit==='diamond')
// console.log(allDiamond)



// всі трефи від 9 та більше!!!!!!!!!!!!!!!
// let allclubs = arr.filter(item=>item.cardSuit==='clubs' && item.value>='9')
// console.log(allclubs)


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let arr = [
//     {cardSuit:'spade', value:'6',color:`black`},
//     {cardSuit:'spade', value:'7',color:'black'},
//     {cardSuit:'spade', value:'8',color:'black'},
//     {cardSuit:'spade', value:'9',color:'black'},
//     {cardSuit:'spade', value:'10',color:'black'},
//     {cardSuit:'diamond',value:'6',color:'red'},
//     {cardSuit:'diamond',value:'7',color:'red'},
//     {cardSuit:'diamond',value:'8',color:'red'},
//     {cardSuit:'diamond',value:'9',color:'red'},
//     {cardSuit:'diamond',value:'10',color:'red'},
//     {cardSuit:'heart',value:'6',color:'red'},
//     {cardSuit:'heart',value:'7',color:'red'},
//     {cardSuit:'heart',value:'8',color:'red'},
//     {cardSuit:'heart',value:'9',color:'red'},
//     {cardSuit:'heart',value:'10',color:'red'},
//     {cardSuit:'clubs',value:'6',color:'black'},
//     {cardSuit:'clubs',value:'7',color:'black'},
//     {cardSuit:'clubs',value:'8',color:'black'},
//     {cardSuit:'clubs',value:'9',color:'black'},
//     {cardSuit:'clubs',value:'10',color:'black'},
//     {cardSuit:'spade', value:'ace',color:`black`},
//     {cardSuit:'diamond', value:'ace',color:`red`},
//     {cardSuit:'heart', value:'ace',color:`red`},
//     {cardSuit:'clubs', value:'ace',color:`black`},
//     {cardSuit:'spade', value:'jack',color:`black`},
//     {cardSuit:'diamond', value:'jack',color:`red`},
//     {cardSuit:'heart', value:'jack',color:`red`},
//     {cardSuit:'clubs', value:'jack',color:`black`},
//     {cardSuit:'spade', value:'queen',color:`black`},
//     {cardSuit:'diamond', value:'queen',color:`red`},
//     {cardSuit:'heart', value:'queen',color:`red`},
//     {cardSuit:'clubs', value:'queen',color:`black`},
//     {cardSuit:'spade', value:'king',color:`black`},
//     {cardSuit:'diamond', value:'king',color:`red`},
//     {cardSuit:'heart', value:'king',color:`red`},
//     {cardSuit:'clubs', value:'king',color:`black`},
//     {cardSuit:'spade', value:'joker',color:`black`},
//     {cardSuit:'diamond', value:'joker',color:`red`},
//     {cardSuit:'heart', value:'joker',color:`red`},
//     {cardSuit:'clubs', value:'joker',color:`black`}
// ]

//
// arr.forEach(value=> console.log(value))
//
// let cards = arr.reduce(function (newArr,arr,)
//     {
//         if (arr.cardSuit==='spade') {
//             newArr.spades.push(arr.value)
//         }
//        else if (arr.cardSuit==='diamond'){
//             newArr.diamonds.push(arr.value)
//         }
//       else if (arr.cardSuit==='heart') {
//             newArr.hearts.push(arr.value)
//         }
//        else  if (arr.cardSuit==='clubs'){
//             newArr.clubs.push(arr.value)
//         }
//         return newArr
//     },
//     {spades:[], clubs:[], diamonds:[],hearts:[]}
// )
//
// console.log(cards)

