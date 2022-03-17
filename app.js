var convert = document.getElementById("convert");
var reset = document.getElementById("reset");

convert.addEventListener("click", ()=>{
    var input_number = document.getElementById("input_decimal").value;
    var result = document.getElementById("result");

    if(input_number == ""){
        alert("Please enter the decimal number. ")
    }
    else if(input_number < 0){
        alert("Please enter the positive number.")
    }
    else{
        reset.style.display = "inline-block";
        var binaryNumber = Number(input_number).toString(2);
        result.innerHTML = binaryNumber;
    }

})


reset.addEventListener("click", ()=>{
    document.location.reload();
});