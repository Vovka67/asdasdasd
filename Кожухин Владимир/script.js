//Переменные: years, myDog, guests
//Функции: dogYears, makeTea, secret
//Встроенные функции: console.log, substr, substring, slice
//Аргументы: myDog, 4, guests, Earl Grey
//Параметры: dogname, age, cups, tea


// Дана строка 'JS'. Сделайте из нее строку 'js'.
//let name='JS';
//console.log(name.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
//let name='я люблю JS!';
//console.log(name.substr(2, 5));
//console.log(name.substring(2, 10));
//console.log(name.slice(8, 10));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
//let name='я люблю JS!';
//console.log(name.indexOf ('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
//let txt='Artyr';
//let n = 5;
//let result = 0;
//if(n<txt.length){
//    result = txt.substr(0,6);
//    console.log(result + '...');
//}else {
//    result=txt;
//    console.log(result);
//}


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
//let name='Я-люблю-JS!'
//console.log(name.replace(/-/g, '!'))


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
//let name='я люблю JS'
//console.log(name.split(" "))


// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.*/
//let name='привет мир'
//console.log(name.split(''))