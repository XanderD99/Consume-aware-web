"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        getFieldInfo();
    });
};

function alertFunction(){
    alert("hello");
}

function getFieldInfo(){
    console.log("button clicked")

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    console.log(name + " " + email + " " + subject + " " + message);
}