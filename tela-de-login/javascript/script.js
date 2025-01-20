var inputPassword = document.getElementById("password-id");
function viewPassword(){
    
    if (inputPassword.type === 'password') {
        inputPassword.type = "text";
        changeImageVisibility();
    }else{
        inputPassword.type = "password";
        changeImageVisibility();
    }
}

function changeImageVisibility(){
    var imageVisibility = document.querySelector(".img-visibility");
    if(inputPassword.type === 'password'){
        imageVisibility.src = "../img/icons8-invisível-24.png";
    }else{
        imageVisibility.src = "../img/icons8-visível-24.png";
    }
}
