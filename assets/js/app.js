function text(){

    let first = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    let second = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

    let third = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

    let numbers = sumUsers.value;
    console.log (numbers);

    let result = '';
    

    for(let symbol of numbers) {
        if (numbers <= 9) {
            result = result + first[symbol];
        } 
    }

    for(let symbol of numbers) {
        if (numbers >= 10 && numbers <= 19) {
            result = second[symbol];
        }
    }

    for(let symbol of numbers) {
        if (numbers >= 20 && numbers <= 99) {
            result = third[symbol] + ' ' + first[symbol];
        }
    }



    numText.innerHTML = `${result}`;
}
