// --створити масив та вивести його в консоль:
// - з 5 числових значень
let oneMas = [2, 5, 7, 8, 9];
console.log(oneMas);
// - з 5 стічкових значень
let stringMas = ["red", "green", "yellow", "blue", "tommato"];
console.log(stringMas);
// - з 5 значень стрічкового, числового та булевого типу
let strNumBul = [25, "res", true, false, "true"];
console.log(strNumBul);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let zeroMas = [];
zeroMas[0] = 5;
zeroMas[1] = true;
zeroMas[2] = "sting";
zeroMas[3] = 453;
zeroMas[4] = "true";
zeroMas[5] = false;
console.log(zeroMas);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
   document.write(`<div> red </div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
   document.write(`<div> red  ${i} </div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let z = 0;
while (z < 20) {
   document.write(`<h1> green </h1>`)
   z++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while (b <= 20) {
   document.write(`<h1> green ${b}</h1>`)
   b++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numberMas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let r = 0;
while (r < numberMas.length) {
   console.log(numberMas[r]);
   r++
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringMass = ["red", "green", "pool", "tomato", "tom", "zer", "zooom", "cat", "true", "false"];
for (const iterator of stringMass) {
   console.log(iterator);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mas = ["red", true, 25, 45, 8, false, "deer", 6, 7, 10];
for (let i = 0; i < mas.length; i++) {
   console.log(mas[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let i = 0; i < mas.length; i++) {
   if (typeof (mas[i]) === "boolean")
      console.log(mas[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < mas.length; i++) {
   if (typeof (mas[i]) === "number") {
      console.log(mas[i]);
   }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < mas.length; i++) {
   if (typeof (mas[i]) === "string") {
      console.log(mas[i]);
   }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let zeroMasTwoo = [];
zeroMasTwoo[0] = "red";
zeroMasTwoo[1] = 25;
zeroMasTwoo[2] = true;
zeroMasTwoo[3] = 45;
zeroMasTwoo[4] = "deer";
zeroMasTwoo[5] = "jon";
zeroMasTwoo[6] = "bob";
zeroMasTwoo[7] = 1;
zeroMasTwoo[8] = 7;
zeroMasTwoo[9] = false;
for (const l of zeroMasTwoo) {
   console.log(l);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//    console.log(i);
//    document.write(`${i}  <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//    console.log(i);
//    document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i += 2){
//    console.log(i);
//    document.write(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//       document.write(i);
//    }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//    if (i % 2 > 0) {
//       console.log(i);
//       document.write(i);
//    }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i <= 2; i++) {
//    for (let z = 0; z <= 60; z++) {
//       console.log(i,z); 
//    }   
// }
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i <= 2; i++) {
//    for (let z = 0; z <= 60; z++) {
//       for (let y = 0; y <= 60; y++) {
//          console.log(i + " год " + z + " хв " + y + " сек");
//       }
//    }
// }
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let strrr = "";
for (let i = 0; i < arr.length; i++) {
   strrr += arr[i];
}
console.log(strrr);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let g = 0;
let strWhile = "";
while (g < arr.length) {
   strWhile += arr[g]; 
   g++
}
console.log(strWhile);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let strForOf = "";
for (const iterator of arr) {
   strForOf += iterator;
}
console.log(strForOf);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.??
// Завдання повторилося тому вирішив виконати за допомогою циклу do While
let d = 0;
let strDoWhile = "";
do {
   strDoWhile += arr[d];
   d++
} while (d < arr.length);
console.log(strDoWhile);

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let grot = ['a', 'b', 'c'];
for (let i = 0; i < 3; i++) {
   grot.push(i+1);
}
console.log(grot);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let tr = [1, 2, 3];
let rt = tr.reverse();
console.log(rt);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let tu = [1, 2, 3];
tu.push(4, 5, 6);
console.log(tu);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let red = [1, 2, 3];
red.unshift(4, 5, 6);
console.log(red);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let masShift = ['js', 'css', 'jq'];
console.log(masShift.shift());
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let masPop = ['js', 'css', 'jq'];
console.log(masPop.pop());
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let masSlise = [1, 2, 3, 4, 5];
masSlise = masSlise.slice(3);
console.log(masSlise);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let bobb = [1, 2, 3, 4, 5];
bobb = bobb.slice(0, 2);
console.log(bobb);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let cool = [1, 2, 3, 4, 5];
let li = cool.slice(0,-2);
console.log(li);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.


// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//  2. вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.