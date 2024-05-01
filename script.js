function manipulateString() {
    var inputString = document.getElementById("inputString").value;

    var manipulationType = document.getElementById("manipulationType").value;
    var output = "";
    
    switch(manipulationType) {
        case "uppercase":
            output = inputString.toUpperCase();
            break;
        case "lowercase":
            output = inputString.toLowerCase();
            break;
        case "reverse":
            output = reverseString(inputString);
            break;
        case "substring":
            var startIndex = parseInt(document.getElementById("startIndex").value);
            var endIndex = parseInt(document.getElementById("endIndex").value);
            output = inputString.substring(startIndex, endIndex);
            break;
        case "slice":
            var startIndex = parseInt(document.getElementById("startIndex").value);
            var endIndex = parseInt(document.getElementById("endIndex").value);
            output = inputString.slice(startIndex, endIndex);
            break;
        case "replace":
            var oldSubstring = document.getElementById("oldSubstring").value;
            var newSubstring = document.getElementById("newSubstring").value;
            output = inputString.replace(oldSubstring, newSubstring);
            break;
       
        default:
            output = "Invalid manipulation type";
    }
    
    document.getElementById("output").innerText = output;
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
    } else {
        document.getElementById("substringInputs").style.display = "none";
        document.getElementById("replaceInputs").style.display = "none";
    }
});
