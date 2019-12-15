
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML += 'touch' + '&nbsp';
}

document.querySelector('.div-1').addEventListener("touchstart", t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2() {
    document.querySelector('.out-2').innerHTML = +document.querySelector('.out-2').innerHTML + 1;
}

document.querySelector('.div-2').addEventListener("touchstart", t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3_1() {
    document.querySelector('.out-3').innerHTML = '1';
}

function t3_2() {
    document.querySelector('.out-3').innerHTML = '2';
}

document.querySelector('.div-3_1').addEventListener("touchstart", t3_1);
document.querySelector('.div-3_2').addEventListener("touchstart", t3_2);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.out-4').innerHTML = document.querySelector('.div-4').innerHTML;
}

document.querySelector('.b-4').addEventListener("touchstart", function () {
    document.querySelector('.div-4').addEventListener("touchstart", t4)
});

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener("touchstart", t4);
    document.querySelector('.out-4').innerHTML = '';
}
document.querySelector('.b-5').addEventListener("touchstart", t5);

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}

document.querySelector('.div-4').addEventListener("touchend", t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}

document.querySelector('.div-7').addEventListener("touchstart", t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8(min, max) {
    min = 0;
    max = a8.length - 1;
    let collor = min - 0.5 + Math.random() * (max - min + 1);
    document.querySelector('.div-8').style.background = a8[Math.floor(collor)];
}

document.querySelector('.div-8').addEventListener("touchstart", t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {
    document.querySelector('.out-9').innerHTML += event.touches.length;
}

document.querySelector('.div-9').addEventListener("touchstart", t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w10 = 75;
function t10() {
    w10++;
    document.querySelector('.div-10').style.width = w10 + 'px';
}

document.querySelector('.div-10').addEventListener("touchmove", t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    document.querySelector('.out-11').innerHTML = 'radiusX = ' + event.touches[0].radiusX + '<br>' + ' radiusY = ' + event.touches[0].radiusY;
}

document.querySelector('.div-11').addEventListener("touchstart", t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let imgsMin = document.querySelectorAll('.img-12-min');
let imgMax = document.querySelector('.div-12-max > img');
let btnNext = document.querySelector('.next');
let btnPref = document.querySelector('.prev');
let btnReset = document.querySelector('.reset');
let out_12 = document.querySelector('.out-12');
const a = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
let icon = {
    "1.png": 'zombie',
    "2.png": 'pumpkin',
    "3.png": 'spider',
    "4.png": 'poison',
    "5.png": 'cauldron',
    "6.png": 'hand'
}
let key = 0;

// Добвление атрибута data-text в img
imgsMin.forEach(function (elem, index) {
    elem.setAttribute('data-text', icon[a[index]]);
});

// Функция удаления выделения (обводки) у картинок
function t12Clear() {
    imgsMin.forEach(function (elem) {
        elem.classList.remove('active-img');
    });
}

// Кнопка reset 
btnReset.addEventListener("touchstart", t12Reset);
function t12Reset() {
    key = 0;
    t12Clear();
    imgMax.src = 'img/' + a[key];
    imgsMin[key].classList.add('active-img');
    out_12.innerHTML = imgsMin[key].getAttribute('data-text');
}


// Кнопка next 
btnNext.addEventListener("touchstart", t12Next);
function t12Next() {
    key++;
    if (key > a.length - 1) key = 0;
    t12Clear();
    imgMax.src = 'img/' + a[key];
    imgsMin[key].classList.add('active-img');
    out_12.innerHTML = imgsMin[key].getAttribute('data-text');
    console.log(key);
}

// Кнопка prev 
btnPref.addEventListener("touchstart", t12Pref);
function t12Pref() {
    key--;
    if (key < 0) key = a.length - 1;
    t12Clear();
    imgMax.src = 'img/' + a[key];
    imgsMin[key].classList.add('active-img');
    out_12.innerHTML = imgsMin[key].getAttribute('data-text');
    console.log(key);
}

// Выбор картинки при помощи touch 
imgsMin.forEach(function (img, index) {
    function t12() {
        t12Clear();
        key = index;
        imgMax.src = img.src;
        console.log(img.src);
        this.classList.add('active-img');
        out_12.innerHTML = imgsMin[key].getAttribute('data-text');
    };
    img.addEventListener("touchstart", t12);
});

