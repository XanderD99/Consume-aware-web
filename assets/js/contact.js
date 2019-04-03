"use strict";

document.addEventListener("DOMContentLoaded", init);

const submitButton = document.getElementById("submitButton");
const contactPersonMail = "someone@example.com";
const secondaryPersonMail = "andsomeoneelse@example.com";

function init() {
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        getFieldInfo();
    });
};

function getFieldInfo(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let statusField = document.getElementById("contactStatus");

    statusField.innerHTML = "<p class='green-text text-darken-2'>Thank you for contacting us!</p>";
    window.location.href = "mailto:" + contactPersonMail + "?cc=" + formatSpaces(email) + "&bcc=" + secondaryPersonMail + "&subject=" + formatSpaces(subject) +"&body=" + formatSpaces(message) + "%20-%20SENDER:%20" + formatSpaces(name);
    document.getElementById("contactForm").reset(); 
}

function formatSpaces(text){
    return text.replace(" ", "%20");
}