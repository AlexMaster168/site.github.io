
function full(){
    var n = prompt("Введите число "+"");
    var a = Math.sqrt(n);
    alert("Корень числа " + n +" это "+ a);

}
function fall(){
    var n = prompt("Введите первое число "+"");
    var s = prompt("Введите второе число" +"");
    var a = n*s;
    alert("Умножение чисел " + n + " и " + s +" это "+ a);

}
function falla(){
    var n = prompt("Введите первое число "+"");
    var s = prompt("Введите второе число" +"");
    var a = n / s;
    alert("Диление чисел " + n + " и " + s +" это "+ a);

}
function falle(){
    var n = prompt("Введите первое число "+"");
    var s = prompt("Введите второе число" +"");
    var a = n - s;
    alert("Вычитание чисел " + n + " и " + s +" это "+ a);

}function fallm(){
    var n = prompt("Введите выражение "+"");
    alert(" Ответ " + eval(n));
 }

function fally(){
    alert("Число ПІ = "+Math.PI);

}
function fullv(){
    alert("Число Эйлера = " +Math.E);
}
function fullz(){
    var n = prompt("Введите первое число "+"");
    var s = prompt("Введите степень числа" +"");
    var a = Math.pow(n,s);
    alert(" Число " +  n + " в степени " + s +" это "+ a);
}
function fallx(){
    var n = prompt("Введите первое число "+"");
    n = parseInt(n);
    var s = prompt("Введите второе число" +"");
    s = parseInt(s);
    var a = n + s;
    window.alert("Сложение чисел " + n + " и " + s +" это "+ a);
}
 function fallk(){
     var n = prompt("Введите первое число "+"");
     var s = prompt("Введите второе числа" +"");
     var a = n/s;
     a = parseInt(a);
     var b = n%s;
     alert(" Число " +  n + " деленое c остатком на " + s +" это "+ a  +" остаток " + b);
 }
 function fulls(){
     var n = prompt("Введите число "+"");
     n = parseFloat(n);
     var a = Math.round(n);
     alert(" Число " + n + " его округление "  +"это "+ a);
 }

function calc(operation) {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (operation == 1) {
        result = num1 + num2;
    }
    else if (operation == 2) {
        result = num1 - num2;
    }
    else if (operation == 3) {
        result = num1 * num2;
    }
    else if (operation ==4){
        result = num1 / num2;
    }

    else if (operation ==5){
        document.getElementById("n1").value = '';//Поле 1
        document.getElementById("n2").value = '';//Поле 2
        document.getElementById("result").innerHTML = '';//Результат проведённых операций.
    }

    document.getElementById('out').innerHTML = result;
}
// Функции калькулятора
function insert(num) {
document.form.textview.value = document.form.textview.value + num;
}
function clean_res() {
    document.form.textview.value = "";
}
function res() {
    document.form.textview.value = eval(document.form.textview.value);
}
function back() {
var exp = document.form.textview.value;
document.form.textview.value = exp.substring(0,exp.length-1);
}
$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');
    var cvadrat = calc.find('.calculatorg__button');
    var n = calc.find('.calculator__n');
    var koren = calc.find('.calculator__kor');


    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });
    // cvadrat BUTTON
    cvadrat.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    });
    // n BUTTON
    n.on('click', function () {
        calcDisplay.val(( calcDisplay.val()+Math.PI) );
    });
    // koren BUTTON
    koren.on('click', function () {
        calcDisplay.val( Math.sqrt(calcDisplay.val()));
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () { // http://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});
var timerId;

function update(){
    var clock = document.getElementById('clock');
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    clock.children[0].innerHTML = hours;

    var minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    clock.children[1].innerHTML = minutes;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    clock.children[2].innerHTML = seconds;

    var day = date.getDate();
    if (day <10) day = "0" + day;
    clock.children[4].innerHTML = day;

    var mont = date.getMonth();
    mont++;
    if (mont < 10) mont = "0" + mont;
    clock.children[5].innerHTML = mont;

    var year = 20;
    clock.children[6].innerHTML = year;
}
function clockStart() {
    timerId = setInterval(update, 1000);
    update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
}
function clockStop(){
    var clear = clearInterval(timerId);
}
clockStart();

function slowScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}
$(document).on("scroll",function(){
    if($(window).scrollTop()===0)
        $('header').removeClass("fixed");
    else
        $('header').attr("class","fixed");
});
function modal_i_2() {
    var b = document.getElementById("myModal2");
    b.style.display = "none";
}
function image_2() {
    var modalImg = document.getElementById("img02");
    var b = document.getElementById("myModal2");
    var m = document.getElementById("myImg2");
    var captionText = document.getElementById("caption2");
    b.style.display = "block";
    modalImg.src = m.src;
    captionText.innerHTML = m.alt;
}
function money(value) {
    document.getElementById("outputuan").innerText = value *24.5;
}
// Всплывающая подсказка
function myPoPup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle('show');
}
// Snackbar
function snackbar() {
    var x = document.getElementById("Snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show","");
    },3000);
}
// Фильтрация на сайте
function myfilter(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}
// progress-bar
function progress_move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(progress_interval, 50);

    function progress_interval() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
            document.getElementById("label").innerHTML = width + "%";
        }
    }
}
function openTab(evt, name) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}



















