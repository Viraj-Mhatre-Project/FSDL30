function calculate() {
    const dob = document.getElementById("dob").value;

    if (!dob) {
        alert("Please enter a valid date!");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the age
    document.getElementById('result').textContent = age;
}
