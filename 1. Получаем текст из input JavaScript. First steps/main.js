
//Здесь всего четрые функции
//Две из которых clickPush и ClickClear вызываются при нажатии на соответсвуюзие кнопки
//Третья heckValue это функция проверки наличия содержания в поле input
//Четвертая clearTeaxt отвечает за очистку вывода предыдущего состояния
//Данная программа требует доработки в более совершенный вид

//Вызываем функции по нажатию соответствующей кнопке
document.querySelector('.buttonPush').onclick = clickPush;
document.querySelector('.buttonClear').onclick = clickClear;




//функция при нажатии кнопки Push
function clickPush() {
    //При нажатии Push записываем значение  поле input в переменную а
    let a=document.querySelector('.inputValue').value; //считываем текущие значение из поля input
    if (!checkValue()) {  alert("Обязательно введите любое значение!"); return;};
    document.querySelector('.textPush').innerHTML = "Вы ввели значение:"; //вывод введенного значение ниже с комментарием
    document.querySelector('.textOutput1').innerHTML = a;
    document.querySelector('.textOutput2').innerHTML = "Тип значения:";
    document.querySelector('.textOutput3').innerHTML = typeof(a);
    console.log ("Контролируем переменную а =",a);
    console.log ("И ее тип =",typeof(a));
}
//функция при нажатии кнопки Clear
function clickClear () {
    //При нажатии Clear обнуляем переменную
    let b=document.querySelector('.inputValue').value; //считываем текущие значение из поля input
//    if (b === '') {  alert("Вы еще ничего не ввели"); return;};//если ничего не было введено - высвечиваем предупреждение
    if (!checkValue()) {  alert("Нечего очищать!"); return;};
    //Обнуление переменной
    a=null;
    document.querySelector('.inputValue').value=null;
    document.querySelector('.textPush').innerHTML = "Вы очистили значение";
    document.querySelector('.textOutput1').innerHTML = a;
    console.log ("Контролируем переменную а =",a);
    console.log ("И ее тип =",typeof(a));
    setTimeout(clearTeaxt, 2000); //очистка поля вывода через 2сек

}
//Функция очистки поля вывода
function clearTeaxt (){
    document.querySelector('.textPush').innerHTML = "";
    document.querySelector('.textOutput1').innerHTML = "";
    document.querySelector('.textOutput2').innerHTML = "";
    document.querySelector('.textOutput3').innerHTML = "";
}

//Функция проверки наличия значения в поле input с логированием результатов ее работы
function checkValue () {
    console.log("------------------------")
    console.log("Вызов функции CheckValue")
    let c=document.querySelector('.inputValue').value;
    if (c === '') {  console.log("Возвращаем", false); return false;};
    console.log("Возвращаем",true)
    return true;
    

}