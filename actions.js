function gethistory(){
  return document.getElementById("history-value").innerText;
}
function printhistory(num){
  document.getElementById("history-value").innerText=num;
}
function getOutput(){
  return document.getElementById("output-value").innerText;
}
function printOutput(num){
  document.getElementById("output-value").innerText=num;
}
var operators= document.getElementsByClassName("operator");
for(var i=0; i<operators.length; i++){
  operators[i].addEventListener('click', function(){
    if(this.id=="clear"){
      printOutput("");
      printhistory("");
    }
    else{
      var output=getOutput();
      var history=gethistory();
        history=history+output;
        if(this.id=="="){
          var result=eval(history);
          printOutput(result);
          printhistory("");
        }
        else{
          history=history+this.id;
          printhistory(history);
          printOutput("");
        }
    }
  });
}

var numbers= document.getElementsByClassName('number');
for(var i=0; i<numbers.length; i++){
  numbers[i].addEventListener('click', function(){
    var output=getOutput();
      output=output+this.id;
      printOutput(output);
  });
}
