  // var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a *c)) /2*a;

var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;

function quad(){    
    var firstNum = parseInt(a);
    var secondNum = parseInt(b);
    var thirdNum = parseInt(c);
    var x1 = (secondNum - Math.sqrt(Math.pow(secondNum, 2) - 4 * firstNum * thirdNum)) /(2*firstNum);
    var x2 = (secondNum + Math.sqrt(Math.pow(secondNum, 2) - 4 * firstNum * thirdNum)) /(2*firstNum);  

  document.getElementById("d").value = x1 + " and " + x2;
 
}


   
    



