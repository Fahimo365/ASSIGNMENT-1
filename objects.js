// let person = {
//     names: ['Jeff','Hears','Dave'],
//     age: 20,
//     city: 'Kenya',
// }
// person.names.push('Kenya')
// console.log(person.names);
// console.log(person.age);


// console.log(person.names)


// let name = ['Dave', 'Jack', 'spear']
// let Age = [20,30,5]
// let city = ['Loas', 'Kenya']


// console.log('I am ' + name[0] + ' and i live in ' + city[0])
let friends = {  //Objects *********************
    names: ['Kec', 'paul', 'Sead'], //Arrays *************************
    city: ['Nai','Kisumu'],
    school:['Ku','Jkuat'],
    Age:[30,20,24]


};
friends.names.push('Peter');
console.log(friends);
console.log('I am ' + friends.names[0] + ' and i am ' + friends.Age[1] + ' years old. Studying in ' + friends.school);

friends.city.pop();
console.log('I am ' + friends.names[0] + ' and i am ' + friends.Age[1] + ' years old. Studying in ' + friends.city[0]);


let cars = {
    model: ['Camry', ' Toyota'],
    Year: [2012, 1242,2452,],
    Price: ['123214', '415411','1524551']
}
console.log('My Car is ' + cars.model[0] + ',' + cars.Year[1] + ' model')

console.log(typeof cars);

