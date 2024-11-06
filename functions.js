function sayHello(name) {
    console.log('..........')
    console.log('Hello' + name + '!')
    console.log('..........')

}

// sayHello();
// let a = sayHello;
// a(); 
sayHello(' Bob')
sayHello(' Reast')

function calculateTax(amount){
    let result = amount * 0.0825
    return result;

}
let tax = calculateTax(100);
console.log(tax);

function calculateTotalSalesHourly (number){
    let result = number * 60 * 10
    return result
}
let Sales = calculateTotalSalesHourly(300);
console.log(Sales);


function StudentsInSchool(){
    let result = ['Dell', 'Satys', 'Dera']
    return result
}
function StudentsNotInSchool(){
    let result = ['Dfae', 'Fgarr','Fearra']
    return result

}

console.log(StudentsInSchool());
console.log(StudentsNotInSchool())
