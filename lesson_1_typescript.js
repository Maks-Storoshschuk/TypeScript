function first_function(x) {
    return (x);
}
var first_array = first_function({ a: 9, b: 'rover', c: true });
console.log(1, first_array);
var INumber = /** @class */ (function () {
    function INumber() {
    }
    return INumber;
}());
function minArr(a) {
    var minNum = a.num1;
    if (minNum > a.num2) {
        minNum = a.num2;
    }
    else if (minNum > a.num3) {
        minNum = a.num3;
    }
    console.log(2, minNum);
}
minArr({ num1: 123, num2: 234, num3: 345 });
function maxArr(a) {
    var maxNum = a.num1;
    if (maxNum > a.num2) {
        maxNum = a.num1;
    }
    else if (maxNum < a.num3) {
        maxNum = a.num3;
    }
    console.log(3, maxNum);
}
maxArr({ num1: 123, num2: 234, num3: 345 });
function max(a) {
    var max = a.array[0];
    for (var _i = 0, _a = a.array; _i < _a.length; _i++) {
        var maxItem = _a[_i];
        if (maxItem > max)
            max = maxItem;
    }
    return max;
}
var maxMas = max({ array: [123, 234, 345, 456, 567, 678] });
console.log(4, maxMas);
function min(a) {
    var min = a.array[0];
    for (var _i = 0, _a = a.array; _i < _a.length; _i++) {
        var minItem = _a[_i];
        if (minItem < min)
            min = minItem;
    }
    return min;
}
var minMas = min({ array: [123, 234, 456, 567, 678] });
console.log(5, minMas);
function suma(a) {
    var suma = 0;
    for (var _i = 0, _a = a.array; _i < _a.length; _i++) {
        var sumaElement = _a[_i];
        suma = suma + sumaElement;
    }
    return suma;
}
var sum = suma({ array: [123, 234, 345, 567, 678] });
console.log(6, sum);
function aver(a) {
    var aver = 0;
    for (var i = 0; i < a.array.length; i++) {
        var arr2Element = a.array[i];
        aver = aver + arr2Element / a.array.length;
    }
    return aver;
}
var average = aver({ array: [123, 234, 345] });
console.log(7, average);
function ran() {
    var ran = [];
    for (var i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random() * 100));
    }
    return ran;
}
var rand = ran();
console.log(8, 'тут хз як робити', rand);
function keyReturn(arguments) {
    var mas = [];
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var argument = arguments_1[_i];
        for (var _a = 0, argument_1 = argument; _a < argument_1.length; _a++) {
            var argumentElement = argument_1[_a];
            for (var argumentElementElement in argumentElement) {
                mas.push(argumentElementElement);
            }
        }
    }
    return mas;
}
var mass = { person: { name: 'Vasia', age: 27 }, model: 'Lexus' };
console.log(9, 'тут також проблема', keyReturn(mass));
function znach(arguments) {
    var mas = [];
    for (var _i = 0, arguments_2 = arguments; _i < arguments_2.length; _i++) {
        var argument = arguments_2[_i];
        for (var _a = 0, argument_2 = argument; _a < argument_2.length; _a++) {
            var argumentElement = argument_2[_a];
            for (var argumentElementElement in argumentElement) {
                mas.push(argumentElement[argumentElementElement]);
            }
        }
    }
    return mas;
}
console.log(10, 'і тут', znach(mass));
function matrix(matrixIndex1, matrixIndex2) {
    var matriXXX = [];
    for (var i = 0; i < matrixIndex1.array.length; i++) {
        matriXXX.push(matrixIndex1.array[i] + matrixIndex2.array[i]);
    }
    return matriXXX;
}
console.log(11, matrix({ array: [12, 23, 34, 45] }, { array: [23, 34, 45, 56] }));
function zad(zad1, zad2) {
    var zadacha = [];
    for (var i = 0; i < zad1.abetka.length; i++) {
        zadacha.push(zad1.abetka[i], zad2.array[i]);
    }
    return zadacha;
}
console.log(12, zad({ abetka: ['a', 'b', 'c'] }, { array: [1, 2, 3] }));
var chisla = [1, 2, 3];
var rev = chisla.reverse();
console.log(13, rev);
chisla.reverse();
var chisla3 = chisla.concat(4, 5, 6);
console.log(14, chisla3);
var otherArray = [1, 2, 3];
otherArray.unshift(4, 5, 6);
console.log(otherArray);
chisla = [1, 2, 3, 4, 5];
chisla = chisla.splice(3, 2);
console.log(15, chisla);
chisla = [1, 2, 3, 4, 5];
chisla = chisla.slice(0, 2);
console.log(16, chisla);
var myArray = ["1", "2", "3", "4", "5"];
myArray.splice(3, 2, "a", "b", "c");
console.log(17, myArray);
function random() {
    var ran = [];
    for (var i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random() * 100));
    }
    return ran;
}
console.log(18, random());
function double(arr) {
    var moass = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            moass.push(arr[i]);
        }
    }
    return moass;
}
var double1 = double(ran());
console.log(19, double1);
function word(arr) {
    var words = 'something';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var some = arr_1[_i];
        words += some;
    }
    return words;
}
console.log(20, word(['  jne', '  disk', '  data']));
