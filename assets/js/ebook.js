"use strict";

document.addEventListener('DOMContentLoaded', init);

let parts = [];

function init(){
    let pdf2 = new Pdf(2, "second title","","");
    let pdf = new Pdf(1, "just a title", "loc", "loc");
    let chap = new Chapter(1, "chapter title");
    chap.addPdf(pdf);
    chap.addPdf(pdf2);
    let part = new Part(1, "part title");
    let part2 = new Part(2, "second part");
    part.addChapter(chap);
    parts.push(part);
    parts.push(part2);
    generateAside();
    let buttons = document.getElementsByClassName("logobtn");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', clickButton, false)
    }

    //PDFObject.embed("assets/pdf/opgave.pdf","#pdfviewer");
}

function clickButton() {
    let chapter = this.getAttribute("data-chapter");
    let file = this.getAttribute("data-file");
    console.log(chapter);
    setPdf(chapter);
    setProgressBar(chapter);

}

function setProgressBar(chapter) {
    let percent = (chapter/chapters.length)*100;
    document.getElementById("progress").style.width = percent+"%";
}


function generateAside(){
    //let part = getPartAttribute();
    let aside = document.querySelector("#list");
    let html = "";
    let generatedParts = parts;
    /*if(part !== null) {
        generatedParts = parts.filter(partObj =>
            partObj.number === part
        );
    }*/
    generatedParts.forEach(part => {
        html += part.getHtml();
    });
    aside.innerHTML = html;
}

function getPartAttribute() {
    let url = window.location.href;
    let attributesString = url.split("?")[1];
    let attributes = attributesString === null|| attributesString === undefined ? null: attributesString.split("&");
    let part = attributes === null|| attributes === undefined ? null:attributes.filter(attribute =>
        attribute.includes("part")
    )[0];
    console.log(part);
    let value = part === null || part === undefined ? null:part.split("=")[1];
    console.log(value);
    if(value !== null && value !== undefined) {
        console.log(value);
        return parseInt(value);

    }
    return null;
}







