
function text(){

    let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];

    let dozens =  ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',];

    let hundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let numeric = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];


    let numbers = sumUsers.value;

    console.log(numbers);
    
    let result = '';



    if(numbers.lenght == 1 || numbers <= 10) {
        result = units[numbers];
    } else if (numbers.lenght == 2 || numbers < 20) {
        result = numeric[numbers[1]];
    } else if (numbers.lenght == 2 || numbers >= 20 ) {
        result = `${dozens[numbers[0]]} ${units[numbers[1]]}`;
    } 
    
    if (numbers.length == 3 && numbers[1] != '1') {
        result = `${hundred[numbers[0]]} ${dozens[numbers[1]]} ${units[numbers[2]]}`;
    } else if (numbers.length == 3 && numbers[1] == '1'){
        result  = `${hundred[numbers[0]]} ${numeric[numbers[2]]}`;
    }



    console.log(result);

    numbers = numbers.split('').reverse().join('');

    console.log(numbers);

    if(numbers[0] == '1' && numbers[1] != '1'){
        numText.innerHTML = `${result} гривна`;
    } else if((numbers[0] == '2' || numbers[0] ==  '3' || numbers[0] == '4') && numbers[1] != '1') {
        numText.innerHTML = `${result} гривны`; 
    } else {
        numText.innerHTML = `${result} гривен`;
    }

}
