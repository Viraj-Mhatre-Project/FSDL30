document.getElementById('checkButton').addEventListener('click', function() {
    // Get the age input value
    var age = document.getElementById('age').value;

    // Convert the input to a number
    age = Number(age);

    // Get the result div
    var resultDiv = document.getElementById('result');

    // Check if the input is a valid number
    if (isNaN(age)) {
        resultDiv.textContent = "Please enter a valid number for your age.";
        resultDiv.style.color = "red";
    } else {
        // Check if the user is eligible to vote
        if (age >= 18) {
            resultDiv.textContent = "You are eligible to vote.";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "You are not eligible to vote.";
            resultDiv.style.color = "red";
        }
    }
});