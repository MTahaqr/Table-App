

var count=0;
function submit () {
    var userInput = document.getElementById("userInputId").value;
    //var userInput=prompt();
    var line; 
    var lines;
    var linesInUL=document.getElementById("UlList");
    if(count<10){
    for(var i=1 ; i<=10 ; i++){
        
        line =  document.createTextNode(userInput+ " x "+ i + " = " + userInput*i);
        lines = document.createElement("li");
        lines.setAttribute("class","list-group-item");
        lines.appendChild(line);
        linesInUL.appendChild(lines);
        count++;
        }
    
        again = document.createElement("input");
        again.setAttribute("type","submit");
        again.setAttribute("value","AGAIN");
        again.setAttribute("class","btn btn-info btn2");
        again.setAttribute("onClick","remove()");
        
        linesInUL.appendChild(again);
}

}

function remove(){
    location.reload();
    
}