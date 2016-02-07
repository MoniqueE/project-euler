function multiples() {
   var number = document.getElementById("inputOne").value;
   var sum = 0;
   for (var i = 0; i < number; i++) {
       if ((i % 3 === 0) || (i % 5 === 0)) {
           sum += i;
       }
   }
   var result = document.getElementById("answerOne");
   result.textContent = sum.toString();
}

function fibonacci() {

    var inputNumber = document.getElementById("inputTwo").value;
    var result = document.getElementById("answerTwo");

    var a = 1;
    var b = 2;
    var c = 2; //Next value in sequence is 2, temporary value.
    var sum = 0;
    while(c < inputNumber){
      if(c % 2 === 0){
        sum += c;
      }
      c = a + b;
      a = b;
      b = c;
    }
    result.textContent = sum.toString();
}

function largestPrime() {
    var number = document.getElementById("inputThree").value;
    var factors = [], divideBy = 2;

    while (number > 1) {
        while (number % divideBy === 0) {
            factors.push(divideBy);
            number /= divideBy;
        }

        divideBy += 1;
    }

    factors = Math.max.apply(Math, factors);
    var result = document.getElementById("answerThree");
    result.textContent = factors.toString();
}
