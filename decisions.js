const age = 10;

if (age==18){
    console.log('You are an adult');
} else if(age >= 12){
    console.log('You are a teenager')

} else if(age <=12){
    console.log('Parental Guidance')
}else{
    console.log('You are still a kid')

}


















let Age = 100;

if (Age==16){
    console.log('You are eligible to get an ID');
} else if(Age>=16){
    console.log('Get vaccinated')
} else if(Age==12){
    console.log('Under age')
}else{
    console.log('Ready')
}










let grade = parseInt(prompt("Enter your marks(0-100):"));

let category;
if (grade>=90 && grade<=100){
    category= "Excellent"
} else if(grade>=80 && grade<=90){
    category= "Good"
} else if(grade>=70 && grade<=80){
    category="work hard"
} else if(grade>=60 && grade<=70){
    category= "Put an effort"
}
else{
    category= "You failed"
}
switch (grade){
    case 'Excellent':
        console.log('That was a good job')
    case 'Good':
        console.log('You tried hard')
}


let number = parseInt(prompt("Enter a number:"))

if (number %2 === 0){
    console.log("Even number")
} else{
    console.log("Odd number")
}