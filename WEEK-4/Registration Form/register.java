function form(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if(password!==fcrit25){
        errorMessage.textContent = "Enter Valid Password"
    }
    if(name!==Viraj){
        errorMessage.textContent = "Enter Valid Name"
    }

    if(name == "" || email == "" || password == ""){
        errorMessage.textContent = "Fields Should Not be Empty";
        return false;
    }

    alert("Registration successful!");
    return true;
}