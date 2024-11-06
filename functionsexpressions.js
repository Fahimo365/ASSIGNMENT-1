setTimeout(function() { 
    console.log('Welcome!') 
}, 
2000);

setTimeout(function(){ 
    console.log('I waited a second')
},
 50);

 let counter = 3;
 function timeout(){
    setTimeout(function(){
        console.log('Welcome back!' + counter++);
        timeout();
    },1200);
 }
 timeout();

 (function (){
    console.log('Immediately Invoked(IIFE)');

 })();
 setTimeout(function(){
    console.log('Hey')
 },20) 


 setTimeout(function(){
    console.log('Rest')
 },200)

