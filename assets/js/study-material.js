"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    Form();
    document.querySelector("#teacher").addEventListener("click", UnhideTeacherSub);
    document.querySelector("#intro").addEventListener("click", UnhideIntoSub);
};


function Form(){
    const Modalelem = document.querySelector('#modal');
    const instance = M.Modal.init(Modalelem);
    instance.open();
}


function UnhideTeacherSub(){
    document.querySelector("#teacherSub").classList.remove("hide");
}

function UnhideIntoSub(){
    document.querySelector("#introSub").classList.remove("hide");
}