function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);
    var result = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        result += "You are underweight.";
    } else if (bmi < 24.9) {
        result += "You have a normal weight.";
    } else if (bmi < 29.9) {
        result += "You are overweight.";
    } else {
        result += "You are obese.";
    }

    document.getElementById("result").innerHTML = result;
}
