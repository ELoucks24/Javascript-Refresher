let i = 1; 
let fizzbuzzes = 0; 
while (fizzbuzzes != 687){
   
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
        fizzbuzzes++;
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');

    } else {
        console.log(i);
    }
    i++
}


