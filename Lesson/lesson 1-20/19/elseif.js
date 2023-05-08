let fizzbuz= document.getElementById('fizzbuzz')

let count = prompt ('enter your number');
count=parseInt(count)
let num = 1;
while(num<=count){

if(num%3==0&&num%2==0){
      fizzbuz.textContent= fizzbuz.textContent +' count = ' + num + ' FizzBuzz, '}
else if (num%2==0){ 
   fizzbuz.textContent= fizzbuz.textContent + ' count = ' + num + ' Fizz,'}
 else if(num%3==0){
  fizzbuz.textContent= fizzbuz.textContent + ' count = ' + num + ' Buzz,'}
num =num +1}
