// QUESTION NO 1

let number = ['8','5','4','9'];
console.log(number);
// number.sort();
var sot = number.sort()
console.log(sot)


// QUESTION NO : 2 

var arry = ['2','4','6','0','-2','-5']
var largest = 0;
for(var i=0 ; i<arry.length; i++){
        if (largest<arry[i]) {
            largest=arry[i]
        }
        
    }
    console.log(largest);

    // Question no 3
    
 
for(var i=0; i<=15; i++ ){
    if (i===0) {
        console.log(i + ' is even');
    }  
    else if (i % 2 === 0) {
        console.log(i + ' is even');
    }
    else{
        console.log(i + ' is odd');
    }
}


// Question NO 4

for (let i = 0; i <=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " fizzbuzz");
    }
    else if (i % 5 === 0 ){
        console.log(i + " Buzz");
    }
    else if  (i % 3 === 0) {
        console.log(i + " Fizz");
}
}

// Question NO 7
var n = 5;
let string = "";
for(var i = 1 ; i<=n; i++ ){
    for(var j= 0 ; j < i; j++){

        string += "*";
    }
    string += "\n";
}
console.log(string);

// Question no  8

var n = 1000;
for(var i = 0 ; i<=n ; i++){
    if (i % 3===0 && i % 5 === 0 ) {
        
        console.log(i + "  multiple of 3 & 5 ");
    }
}

