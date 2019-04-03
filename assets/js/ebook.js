"use strict";

let parts = [
    {number: 1, title: "Part 1 title"},
    {number: 2, title: "Part 2 title"}
];


let pdfs = [
    {chapter:1, part:getPart(1), title:"Titel 1", location:"assets/pdf/A title.pdf"},
    {chapter:2, part:getPart(1), title:"Titel 2", location:"assets/pdf/Life is good.pdf"},
    {chapter:3, part:getPart(2), title:"Titel 3", location:"assets/pdf/opgave.pdf"},
    {chapter:4, part:getPart(2), title:"Titel 4", location:"assets/pdf/opgave.pdf"}
];

document.addEventListener('DOMContentLoaded', init);

function init(){
    generateAside();
    let buttons = document.getElementsByClassName("logobtn");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', setPdf, false)
    }

    PDFObject.embed("assets/pdf/opgave.pdf","#pdfviewer");
}

function setPdf() {
    let chapter = this.getAttribute("data-chapter");
    let file = this.getAttribute("data-file");
    let pdf = getPdf(chapter);
    document.getElementById("title").innerHTML = pdf.title;
    PDFObject.embed(pdf.location,"#pdfviewer");
}

function getPart(number) {
    return parts.filter(part => part.number === number)[0]
}

function getPdfs(part) {
    return pdfs.filter(pdf => pdf.part.number === part.number);

}

function getPdf(chapter) {
    return pdfs.filter(pdf => pdf.chapter === parseInt(chapter))[0];
}

function generateAside(){
    let part = getPartAttribute();
    let aside = document.querySelector("#list");
    let html = "";
    let generatedParts = parts;
    if(part !== null) {
        generatedParts = parts.filter(partObj =>
            partObj.number === part
        );
    }
    generatedParts.forEach(part => {
        html += getPartHtml(part);
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

function getPartHtml(part){
    let html = "";
    html += "<li>";
    html += "<h2>Part "+ part.number + ": " + part.title + "</h2>";
    html += "<ul>";
    getPdfs(part).forEach(pdf => {
        html += getPdfHtml(pdf)
    });
    html += "</ul>";
    html += "</li>";
    return html;
}

function getPdfHtml(pdf){
    let html = "";
    html += "<li>";
    html += "<h3>"+ pdf.chapter + ". " + pdf.title + "</h3>";
    html += "<div><img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton' data-chapter='"+ pdf.chapter +"' data-file='pdf'><img src='assets/images/powerpoint.png' class='logobtn' alt='pttbutton' data-chapter='"+ pdf.chapter +"' data-file='ppt'></div>";
    html += "</li>";
    return html;
}



/*
HTML TEMPLATE
<li>
    <h2>Part I: consumers and consumption in Europe <em>General characteristics and consumer awareness importance</em></h2>
    <ul>
        <li>
            <h3>I. Consumers and their behaviour on the market</h3>
            <div>
                <img src="assets/images/powerpoint.png" class="logobtn" alt="powerpointbtn">
                <img src="assets/images/pdflogo.png" class="logobtn" alt="pdfbtn">
            </div>
        </li>
        <li>
            <h3>II. Understanding consumption and consumer values</h3>
            <div>
                <img src="assets/images/powerpoint.png" class="logobtn"  alt="powerpointbtn">
                <img src="assets/images/pdflogo.png" class="logobtn"  alt="pdfbtn">
            </div>
        </li>
        <li>
            <h3>III. Customer awareness importance</h3>
            <div>
                <img src="assets/images/powerpoint.png" class="logobtn"  alt="powerpointbtn">
                <img src="assets/images/pdflogo.png" class="logobtn"  alt="pdfbtn">
            </div>
        </li>
    </ul>
</li>
*/