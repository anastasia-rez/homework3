
function text(){

    let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

    let dozens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

    let hundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];


    let numbers = sumUsers.value;

    console.log(numbers);
    
    let result = '';



    if(numbers.length == 1 || numbers < 20){
        result =  units[numbers];
    }else if(numbers.length == 2) {
        result = `${dozens[numbers[0]]} ${units[numbers[1]]}`;
    } else if (numbers.length == 3) {
        result = `${hundred[numbers[0]]} ${dozens[numbers[1]]} ${units[numbers[2]]}`;
    }

    console.log(result);

    numText.innerHTML = `${result}`


    if (numbers % 10 == 1){
        numText.innerHTML = `${result} гривна`;
    } else if (numbers % 10 == 2, 3, 4) {
        numText.innerHTML = `${result} гривны`; 
    } else {
        numText.innerHTML = `${result} гривен`;
    }







    // function declOfNum(number, titles) {
    //     let cases = [2, 0, 1, 1, 1, 2];
    //     return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    //   }

    //   numText.innerHTML = `${result} ${declOfNum(result, ['гривна', 'гривны', 'гривен'])}`;
    


    // let declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];


    // numText.innerHTML = `${result} ${declination(result, ['гривна', 'гривны', 'гривен'])}`;
// }
}