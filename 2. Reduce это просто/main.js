//let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14.15,16];
//let a = [1,2,3,4,5,6,1,200,3,4,5,7,8,9,0,11,2,3,4,6,7,88,523,5,44];
let a = [1,1,1,1,1,1,1,1,1]
let sum = 0
let maxArr
document.querySelector('.wellCome1').innerHTML = "Существует следующий массив:" ;
document.querySelector('.printArray').innerHTML = a ;

document.querySelector('.taskOne-addEl').innerHTML = "Задача №1:  Найти сумму всех чисел в массиве" ;
DecisionArr();
document.querySelector('.taskTwo-maxArrEl').innerHTML = "Задача №2 -  Найти наибольшие число в массиве" ;
maxArrEl();
document.querySelector('.taskThree-sumArrEl').innerHTML = "Задача №3 -  Найти сумму всех элементов массива с помощбю метода reduce" ;
reduceMethod();

//Функция вычисляет сумму всех элементов в массиве
function DecisionArr() {
    for (i=0; i<a.length;i++) {
        sum=sum+a[i];
        document.querySelector('.taskOneDecision').innerHTML = "Решение: Сумма всех элементов в массиве -" ;
        document.querySelector('.taskOneDecisionResult').innerHTML =  sum ;
        
    }
    console.log("Сумма всех элементов в массиве -", sum) ;
}
//Функция вычисляет наибольшее число в массиве
function maxArrEl() {
    let max1=0
    for (i=0; i<a.length;i++) {
        if ((a[i])>max1) {max1=a[i]}
        document.querySelector('.taskTwoMaxArrElDecision').innerHTML = "Решение: Наибольшие число в массиве -" ;
        document.querySelector('.taskTwoMaxArrElResult').innerHTML =  max1 ;
    }
    console.log("Максимальный элемент в массиве", max1);
}
//Функция вычисляет сумму всех элементов в массиве методом reduce
function reduceMethod() {
    let max2 = a.reduce((prev,item,index) => {
        return prev+item;
    },0);
    document.querySelector('.taskThreesumArrElDecision').innerHTML = "Решение: Cумма всех элементов массива методом reduce -" ;
    document.querySelector('.taskThreesumArrElResult').innerHTML =  max2 ;
    console.log("Cумма всех элементов массива методом reduce", max2);


}