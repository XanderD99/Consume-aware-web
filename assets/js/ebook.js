"use strict";

document.addEventListener('DOMContentLoaded', init);

let parts = [];

function init(){

    generateParts();
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



function getPdfHtml(pdf){
    console.log(pdf.title + "this is a TITLE");
    let html = "";
    html += "<li>";
    html += "<h3>"+ pdf.chapter + ". " + pdf.title + "</h3>";
    html += "<li>"+ pdf.title +" pdf :"+" <img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton' data-chapter='"+ pdf.chapter +"' data-file='pdf'></li>"+"<li>"+ pdf.title +"<img src='assets/images/powerpoint.png' class='logobtn' alt='pttbutton' data-chapter='"+ pdf.chapter +"' data-file='ppt'/></li>";
    html += "</li>";
    return html;
}