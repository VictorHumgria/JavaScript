function fizzBuzz(num){
    if(eNum(num)){
        if(num % 3 === 0 && num % 5 === 0 ){
            console.log('FizzBuzz');
        }else if(num % 3 === 0){
            console.log('Fizz');
        }else if(num % 5 === 0){
            console.log('Buzz');
        }else{
            console.log( num);
        }
    }else{
        return num;
    }
};
function eNum(num){
    if( typeof num === 'number' && (num>=0 && num <=100)){
       return true;
    }else{
        return false;
    }
}
fizzBuzz(10);




