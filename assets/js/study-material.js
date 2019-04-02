"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    Form();
    document.querySelector("#teacher").addEventListener("click", UnhideTeacherSub);
    document.querySelector("#book").addEventListener("click", UnhideIntoSub);
    // document.querySelector("#part1").addEventListener("click", UnhidePart1Sub);
    document.querySelector("#part1").addEventListener("click", e => selectPart("#part1Sub"));
    document.querySelector("#part2").addEventListener("click", UnhidePart2Sub);
    document.querySelector("#part3").addEventListener("click", UnhidePart3Sub);
    document.querySelector("#chapter1").addEventListener("click", UnhideChapter1Sub);
};




function Form(){
    const Modalelem = document.querySelector('#modal');
    const instance = M.Modal.init(Modalelem);
    instance.open();
}

function hide(query) {
    document.querySelector(query).classList.add("hide");
}

function show(query) {
    document.querySelector(query).classList.remove("hide");
}

function selectPart(query) {
    // Hide ALL parts
    hide("#part2Sub");
    hide("#part1Sub");
    hide("#part3Sub");
    
    // show part that we need
    show(query);
}

function UnhideChapter1Sub(){
    show("#chapter1Sub");
}
// chill  yeeeeeeeeeeeeeeeeeeeeeet nice man LINUX
yeeeeeeeeeeeeeeeeeeeeeeeeeet
// cvkes ga da dan morgen fixen tis hier gedaan 
// straks bowlingske :p
 / cooool
 // jeeeps
 