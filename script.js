function manipulateString() {
    var inputString = document.getElementById("inputString").value;

    var manipulationType = document.getElementById("manipulationType").value;
    var output = "";
    
    switch(manipulationType) {
        case "uppercase":
             document.getElementById("output").innerText = inputString.toUpperCase();
            break;
        case "lowercase":
             document.getElementById("output").innerText = inputString.toLowerCase();
            break
        case "reverse":
             document.getElementById("output").innerText = reverseString(inputString);
            break;
        case "substring":
            var startIndex = parseInt(document.getElementById("startIndex").value);
            var endIndex = parseInt(document.getElementById("endIndex").value);
            document.getElementById("output").innerText = inputString.substring(startIndex, endIndex);
            break;
        case "slice":
            var startIndex = parseInt(document.getElementById("startIndex").value);
            var endIndex = parseInt(document.getElementById("endIndex").value);
            document.getElementById("output").innerText = inputString.slice(startIndex, endIndex);
            break;
        case "replace":
            var oldSubstring = document.getElementById("oldSubstring").value;
            var newSubstring = document.getElementById("newSubstring").value;
            document.getElementById("output").innerText = inputString.replace(oldSubstring, newSubstring);
            break;
            case "table":
               var tab=parseInt(inputString);
               if (isNaN(tab)) {
                console.log("error");
                console.log("error");
                alert("Please Enter a valid Value");
               
            } else {
               
                for (let i = 1; i <= 10; i++) {
                    document.getElementById("output").innerHTML += tab + " x " + i + " = " + (tab * i) + "<br>";
                   
                }
            }
            
              
                break;
       
        default:
            output = "Invalid manipulation type";
    }
    
    // document.getElementById("output").innerText = output;
}


function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

document.getElementById("manipulationType").addEventListener("change", function() {
    var selectedOption = this.value;
    if (selectedOption === "substring") {
        document.getElementById("substringInputs").style.display = "block";
        document.getElementById("replaceInputs").style.display = "none";
    } else if (selectedOption === "slice") {
        document.getElementById("substringInputs").style.display = "block";
        document.getElementById("replaceInputs").style.display = "none";
    } else if (selectedOption === "replace") {
        document.getElementById("substringInputs").style.display = "none";
        document.getElementById("replaceInputs").style.display = "block";
    }
    
    else if(selectedOption=="table"){
        var inputElement = document.getElementById("inputString");
        inputElement.type = "number";
        inputElement.placeholder = "Enter a number";
    }
    
    else {
        document.getElementById("substringInputs").style.display = "none";
        document.getElementById("replaceInputs").style.display = "none";
    }
});
