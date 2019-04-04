"use strict";

document.addEventListener("DOMContentLoaded", init);

const qs = (ele) => document.querySelector(ele);

function init() {    
    // qs("#teacher").addEventListener("click", e => selectTeacher("#teacherSub"));
    qs("#part1").addEventListener("click", e => selectPart("#part1Sub"));
    qs("#part2").addEventListener("click", e => selectPart("#part2Sub"));
    qs("#part3").addEventListener("click", e => selectPart("#part3Sub"));
    qs("#logout").addEventListener("click", logout);
    for(let i= 1; i <=11; i++ ){
        qs(`#chapter${i}`).addEventListener("click", (e) => selectChapter(`#chapter${i}Sub`))
    }
};

function logout(){
    document.cookie =  'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "index.php";
}

function Form(){
    const Modalelem = qs('#modal');
    const instance = M.Modal.init(Modalelem);
    instance.open();
}

function selectTeacher(query) {
    // window.location.href = "/study-material/index.php?type=teacher";
    Form();
    selectPart(query);
}


function selectBook(query) {
    // hide("#teacherSub");
    show(query);
}


function hide(query) {
    qs(query).classList.add("hide");
}

function show(query) {
    qs(query).classList.remove("hide");
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