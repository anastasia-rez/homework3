// function text(){

//     let first = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

//     let second = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

//     let third = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

//     let numbers = sumUsers.value;
//     console.log (numbers);

//     let result = '';
    

//     for(let symbol of numbers) {
//         if (numbers <= 9) {
//             result = result + first[symbol];
//         } 
//     }

//     for(let symbol of numbers) {
//         if (numbers >= 10 && numbers <= 19) {
//             result = second[symbol];
//         }
//     }

//     for(let symbol of numbers) {
//         if (numbers >= 20 && numbers <= 99) {
//             result = third[symbol] + ' ' + first[symbol];
//         }
//     }



//     numText.innerHTML = `${result}`;
// }



function text(){

    let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

    let dozens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

    let hundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let valute = ['гривна', 'гривны', 'гривен']

    let numbers = sumUsers.value;

    console.log(numbers);
    
    let result = '';

    if(numbers.length == 1 || numbers < 20){
        result =  units[numbers] + ' ' + valute[2];
    }else if(numbers.length == 2) {
        result = `${dozens[numbers[0]]} ${units[numbers[1]]}` + ' ' + valute[2];
    } else if (numbers.length == 3) {
        result = `${hundred[numbers[0]]} ${dozens[numbers[1]]} ${units[numbers[2]]}` + ' ' + valute[2];
    }

    



    numText.innerHTML = `${result}`;
}