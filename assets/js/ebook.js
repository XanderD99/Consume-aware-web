"use strict";

document.addEventListener('DOMContentLoaded', init);

let parts = [];

function init(){
    let pdf2 = new Pdf(2, "second title","","");
    let pdf = new Pdf(1, "just a title", "loc", "loc");
    let ppt1 = new Ppt(1,"ppt title", "loc","download");
    let Video1 = new Video(1,"Video title","plekke");
    let chap1 = new Chapter(1, "chapter1 title");
    let chap2 = new Chapter(2, "chapter2 title");
    chap1.addPdf(pdf);
    chap1.addPdf(pdf2);
    chap1.addPpt(ppt1);
    chap1.addVideo(Video1);

    chap2.addPdf(pdf);
    chap2.addPpt(ppt1);
    chap2.addVideo(Video1);
    let part = new Part(1, "part title");
    let part2 = new Part(2, "second part");
    part.addChapter(chap1);
    part.addChapter(chap2);
    parts.push(part);
    parts.push(part2);




    generateAside();
    setFileClickListeners();

    //PDFObject.embed("assets/pdf/opgave.pdf","#pdfviewer");
}

function setFileClickListeners() {
    let buttons = document.getElementsByClassName("file");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', selectFile, false);
    }
}

function selectFile() {
    let partId = parseInt(this.getAttribute("data-part"));
    let chapterId = parseInt(this.getAttribute("data-chapter"));
    let fileId = parseInt(this.getAttribute("data-file"));

    let part = parts.filter(part => part.getId() === partId)[0];
    let chapter = part.getChapter(chapterId);
    let file = chapter.getFile(fileId);

    let displayed = part.getChapter(chapterId).getFile(fileId);

    PDFObject.embed(displayed.location,"#pdfviewer");

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
