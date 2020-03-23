function add(){
    var a = document.getElementById('firstnumber').value;
    var b = document.getElementById('secondnumber').value;
    document.getElementById('result').value = parseFloat(a) + parseFloat(b);
}
function mult(){
    var a = document.getElementById('firstnumber').value;
    var b = document.getElementById('secondnumber').value;
    document.getElementById('result').value = parseFloat(a) * parseFloat(b);
}
function sub(){
    var a = document.getElementById('firstnumber').value;
    var b = document.getElementById('secondnumber').value;
    document.getElementById('result').value = parseFloat(a) - parseFloat(b);
}
function div(){
    var a = document.getElementById('firstnumber').value;
    var b = document.getElementById('secondnumber').value;
    document.getElementById('result').value = parseFloat(a) / parseFloat(b);
}
function mod(){
    var a = document.getElementById('firstnumber').value;
    var b = document.getElementById('secondnumber').value;
    document.getElementById('result').value = parseFloat(a) % parseFloat(b);
}
