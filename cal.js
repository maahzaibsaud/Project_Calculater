function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function getclear(){
    var getclear = document.getElementById("result");
    getclear.value ="";
}