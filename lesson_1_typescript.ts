function first_function(x:{a:number,b:string,c:boolean}){
    return(x)
}
let first_array = first_function({a:9,b:'rover',c:true})
    console.log(1,first_array)


class INumber{
    num1:number;
    num2:number;
    num3:number;
    num4?:number
}

function minArr(a:INumber){
    let minNum = a.num1
    if (minNum > a.num2) {
        minNum=a.num2
    }
    else if(minNum>a.num3){
        minNum=a.num3
    }
    console.log(2,minNum)
}
minArr({num1:123,num2:234,num3:345})

function maxArr(a:INumber) {
    let maxNum = a.num1
    if (maxNum > a.num2) {
        maxNum=a.num1
    }
    else if(maxNum<a.num3){
        maxNum=a.num3
    }
    console.log(3,maxNum)
}
maxArr({num1:123,num2:234,num3:345})

interface INumberArray{
    array:number[]
}
function max(a:INumberArray) {
    let max =a.array[0];
    for (const maxItem of a.array){
        if (maxItem > max) max = maxItem;
    }
    return max;
}
let maxMas = max({array:[123,234,345,456,567,678]})
console.log(4,maxMas);

function min (a:INumberArray){
    let min = a.array[0]
    for (let minItem of a.array){
        if (minItem < min) min = minItem;
    }
    return min;
}
let minMas = min({array:[123,234,456,567,678]});
console.log(5,minMas);

function suma (a:INumberArray){
    let suma = 0;
    for (let sumaElement of a.array) {
        suma=suma+sumaElement;
    }
    return suma;
}
let sum = suma({array:[123,234,345,567,678]})
console.log(6,sum)

function aver (a:INumberArray){
    let aver = 0;
    for (let i = 0; i < a.array.length; i++) {
        const arr2Element = a.array[i];
        aver=aver+arr2Element/a.array.length
    }
    return aver;
}
let average = aver({array:[123,234,345]})
console.log(7,average)


function ran(){
    let ran=[]
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random()*100))
    }
    return ran
}
let rand = ran()
console.log(8,'тут хз як робити',rand)


interface Iperson{
    name:string;
    age:number;
}
interface IpersonWithAuto{
    person:Iperson;
    model:string;
}
function keyReturn(arguments) {
    let mas = [];
    for (const argument of arguments ) {
        for (const argumentElement of argument) {
            for (const argumentElementElement in argumentElement) {
                mas.push(argumentElementElement);
            }
        }
    }
    return mas;
}
let mass:IpersonWithAuto={person:{name:'Vasia',age:27},model:'Lexus'}
console.log(9,'тут також проблема',keyReturn(mass));

function znach(arguments) {
    let mas = [];
    for (const argument of arguments) {
        for (const argumentElement of argument) {
            for (const argumentElementElement in argumentElement) {
                mas.push(argumentElement[argumentElementElement]);
            }
        }
    }
    return mas;
}
console.log(10,'і тут',znach(mass));

function matrix(matrixIndex1:INumberArray, matrixIndex2:INumberArray){
    let matriXXX=[]
    for (let i = 0; i < matrixIndex1.array.length; i++) {
        matriXXX.push(matrixIndex1.array[i]+matrixIndex2.array[i])
    }
    return matriXXX;
}
console.log(11,matrix({array:[12,23,34,45]},{array:[23,34,45,56]}));


interface Iabetka {
    abetka:string[]
}


function zad(zad1:Iabetka,zad2:INumberArray){
    let zadacha=[]
    for (let i = 0; i < zad1.abetka.length; i++) {
        zadacha.push(zad1.abetka[i],zad2.array[i])
    }
    return zadacha;
}
console.log(12,zad({abetka:['a','b','c']},{array:[1,2,3]}));


let chisla:number[]=[1,2,3];
let rev=chisla.reverse()
console.log(13,rev)

chisla.reverse()

let chisla3= chisla.concat(4,5,6)
console.log(14,chisla3)

let otherArray:number[]=[1,2,3];
otherArray.unshift(4,5,6);
console.log(otherArray)

chisla=[1,2,3,4,5]
chisla= chisla.splice(3,2)
console.log(15,chisla)

chisla=[1,2,3,4,5]
chisla= chisla.slice(0,2)
console.log(16,chisla)

let myArray:string[]=["1", "2", "3", "4", "5"];
myArray.splice(3, 2, "a", "b", "c");
console.log(17,myArray)

function random(){
    let ran:number[]=[]
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random()*100))
    }
    return ran
}
console.log(18,random())

function double(arr:number[]) {
    let moass:number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i]%2)){
            moass.push(arr[i])
        }
    }
    return moass
}
let double1 = double(ran());
console.log(19,double1)

function word(arr:string[]) {
    let words:string = 'something';
    for (const some of arr) {
        words+=some
    }
    return words
}
console.log(20,word(['  jne','  disk','  data']))