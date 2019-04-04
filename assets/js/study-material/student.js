"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#student").addEventListener("click", e => selectStudent("#studentSub"));
};



function selectStudent(query) {
    window.location.href = "/study-material/index.php?type=student";
    selectPartStudent(query);
}


function selectPartStudent(query) {
    show(query);
}


function hide(query) {
    document.querySelector(query).classList.add("hide");
}

function show(query) {
    document.querySelector(query).classList.remove("hide");
}