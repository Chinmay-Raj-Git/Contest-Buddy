function saveMail(){
    const email = document.getElementById("email-input").value;
    localStorage.setItem("user-email", email);
    console.log(localStorage.getItem("user-email"));
}