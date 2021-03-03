let age = prompt('Ваш вік ');
alert('Ваш вік ' + age);

let product = prompt('Кількість товару');
let cost = prompt('Ціна за одиницю');
let sum = product * cost;
alert('Сума покупки: ' + sum + 'грн');

let number = prompt("Введіть число щоб визначити чи воно від'ємне");
Math.sign(number);
if (number < 0){
    alert("Число від'ємне");
}
else if (number >= 0){
    alert('Число додатне');
}
else{
    alert('Null');
}

let week = prompt('Введіть день тижня');
switch (week){
    case '1':
        alert('Понеділок');
        break;
    case '2':
        alert('Вівторок');
        break;
    case '3':
        alert('Середа');
        break;
    case '4':
        alert('Четвер');
        break;
    case '5':
        alert("П'ятниця");
        break;
    case '6':
        alert('Субота');
        break;
    case '7':
        alert('Неділя');
        break;        
    default:
        alert('Некоректне число');
        break;
};

let mulTable;
for (let i = 1; i <= 10; i++){
    mulTabel = i * 6;
        alert('6 * ' + i + '= ' + mulTabel);
    };

const arr = [-45, 3295, -10, 1, 4];
    let result = arr[2] ** 2;
    alert('-' + result);
    result = arr[0] + arr[4];
    alert(result);
    result = arr[0] ** 2 + arr[3] ** 2;
    alert('-' + result);

let car = [
        {
            owner: "Ira",
            model: "Alfa-Romeo",
            volume: 10
        },
        {
            owner: "Cherduck",
            model: "Mercedes",
            volume: 5.4
        },
        {
            owner: "Tony Stark",
            model: "Audi",
            volume: 6.7
        }
    ]
min  = car[0]["volume"];
let cars = car.forEach(vol => {
    if(vol["volume"] < min){
        min = vol["volume"]
    }

});
alert(min);

let strArr = prompt('Введіть 4 числа: ');
let minArr = strArr.split(" ");
let minArr1 = [];
minArr.forEach(str => minArr1.push(Number(str)));
let max = Math.max(Math.min(minArr1[0], minArr1[1]), Math.min(minArr1[2], minArr1[3]));
alert(max);

let word = prompt('Напишіть слово : ');
alert('В слові ' + word.length + ' символи.');
alert('\u202E' + word);