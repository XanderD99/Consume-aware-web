"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    Form();
    document.querySelector("#teacher").addEventListener("click", e => selectTeacher("#teacherSub"));
    document.querySelector("#book").addEventListener("click", e => selectBook("#bookSub"));
    document.querySelector("#part1").addEventListener("click", e => selectPart("#part1Sub"));
    document.querySelector("#part2").addEventListener("click", e => selectPart("#part2Sub"));
    document.querySelector("#part3").addEventListener("click", e => selectPart("#part3Sub"));
    document.querySelector("#chapter1").addEventListener("click", e => selectChapter("#chapter1Sub"));
    document.querySelector("#chapter2").addEventListener("click", e => selectChapter("#chapter2Sub"));
    document.querySelector("#chapter3").addEventListener("click", e => selectChapter("#chapter3Sub"));
    document.querySelector("#chapter4").addEventListener("click", e => selectChapter("#chapter4Sub"));
    document.querySelector("#chapter5").addEventListener("click", e => selectChapter("#chapter5Sub"));
    document.querySelector("#chapter6").addEventListener("click", e => selectChapter("#chapter6Sub"));
    document.querySelector("#chapter7").addEventListener("click", e => selectChapter("#chapter7Sub"));
    document.querySelector("#chapter8").addEventListener("click", e => selectChapter("#chapter8Sub"));
    document.querySelector("#chapter9").addEventListener("click", e => selectChapter("#chapter9Sub"));
    document.querySelector("#chapter10").addEventListener("click", e => selectChapter("#chapter10Sub"));
    document.querySelector("#chapter11").addEventListener("click", e => selectChapter("#chapter11Sub"));
};

function Form(){
    const Modalelem = document.querySelector('#modal');
    const instance = M.Modal.init(Modalelem);
    instance.open();
}

function selectTeacher(query) {
    hide('#bookSub');
    selectPart(query);
}

function selectBook(query) {
    // hide("#teacherSub");
    show(query);
}


function hide(query) {
    document.querySelector(query).classList.add("hide");
}

function show(query) {
    document.querySelector(query).classList.remove("hide");
}

function selectPart(query) {
    hide("#part2Sub");
    hide("#part1Sub");
    hide("#part3Sub");
    selectChapter(query);
}


function selectChapter(query) {
    hide("#chapter1Sub");
    hide("#chapter2Sub");
    hide("#chapter3Sub");
    hide("#chapter4Sub");
    hide("#chapter5Sub");
    hide("#chapter6Sub");
    hide("#chapter7Sub");
    hide("#chapter8Sub");
    hide("#chapter9Sub");
    hide("#chapter10Sub");
    hide("#chapter11Sub");
    
    show(query);
}