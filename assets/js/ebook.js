"use strict";

let parts = [
    {number: 1, title: "Part 1 title"},
    {number: 2, title: "Part 2 title"}
];

let chapter = [
    {number: 1, part:getPart(1), title: "Consumers and their behaviour on the market"},
    {number: 2, part:getPart(1), title: "Understanding consumption and consumer values"},
    {number: 3, part:getPart(1), title: "Customer awareness importance"},
    {number: 4, part:getPart(2), title: "Understanding the market and companies' behaviour"},
    {number: 5, part:getPart(2), title: "Companies' practices requiring consumers' protection"},
    {number: 6, part:getPart(2), title: "Consumer awareness relevance and strategies: consumer awareness implications on businesses"},
    {number: 7, part:getPart(3), title: "Consumer policy on European market: models and organizational structure"},
    {number: 8, part:getPart(3), title: "Consumer rights: national and European examples and practices"},
    {number: 9, part:getPart(3), title: "Customer rights understanding in services sector"},
    {number: 10, part:getPart(3), title: "Institutions of consumer rights protection"},
    {number: 11, part:getPart(3), title: "Building customer awareness"}
];


let pdfs = [
    {chapter:1, part:getPart(1), title:"Titel 1", location:"assets/pdf/3_Understanding-the-Market-and-Companies-Behavior.pdf", download:"assets/pdf/A title.pdf"},
    {chapter:2, part:getPart(1), title:"Titel 2", location:"assets/pdf/e-chapter9.pdf", download:"assets/pdf/Life is good.pdf"},
    {chapter:3, part:getPart(2), title:"Titel 3", location:"assets/pdf/New_e-book_chapter_VI.pdf", download:"assets/pdf/opgave.pdf"},
    {chapter:4, part:getPart(2), title:"Titel 4", location:"assets/pdf/Unit_1_Understanding_Consumer_Behavior_Agnieszka_Tetla.pdf", download:"assets/pdf/opgave.pdf"}
];

let ppts = [
    {chapter:1, part:getPart(1), title:"Titel 1", location:"assets/pdf/A title.pdf", download:"assets/pdf/A title.pdf"},
    {chapter:2, part:getPart(1), title:"Titel 2", location:"assets/pdf/Life is good.pdf", download:"assets/pdf/Life is good.pdf"},
    {chapter:3, part:getPart(2), title:"Titel 3", location:"assets/pdf/opgave.pdf", download:"assets/pdf/opgave.pdf"},
    {chapter:4, part:getPart(2), title:"Titel 4", location:"assets/pdf/opgave.pdf", download:"assets/pdf/opgave.pdf"}
];

let videos = [
    {chapter:1, part:getPart(1), title:"The psychology behind irrational decisions - Sara Garofalo", location:"https://www.youtube.com/embed/V2EMuoM5IX4" },
    {chapter:1, part:getPart(1), title:"The paradox of value", location:"https://www.youtube.com/embed/e7S8jWh6AEs"},

    {chapter:2, part:getPart(2), title:"The importance of studying consumer behavior", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:3, part:getPart(2), title:"Consumer protection - why it matters to you", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:4, part:getPart(2), title:"About the world's most ethical companies", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:5, part:getPart(2), title:"Huggy met votre famille sur écoute", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:5, part:getPart(2), title:"Huggybug your family today': don't play around with children's online safety", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:5, part:getPart(2), title:"Safety and welfare for the food chain", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},

    {chapter:7, part:getPart(2), title:"Consumer rights: EU presentation", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:7, part:getPart(2), title:"Question on your rights in Europe, complaint against a European trader: contact the ECC network", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:7, part:getPart(2), title:"Consumer rights", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:7, part:getPart(2), title:"Online dispute resolution: fast, fair & convenient", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:10, part:getPart(2), title:"EU trade policy explained", location:"https://www.youtube.com/embed/IiOC5XG2I5Y"},
    {chapter:11, part:getPart(2), title:"European Consumer Center (ECC)", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:12, part:getPart(2), title:"The 11 UN consumer protection guidelines", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},

    {chapter:0, part:getPart(2), title:"Protecting European consumers", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:0, part:getPart(2), title:"Greening the economy: lessons from Scandinavia", location:"https://www.youtube.com/embed/mvuPvAmNItQ"},
    {chapter:0, part:getPart(2), title:"Tax and VAT issues when trading with countries in the EU", location:"https://www.youtube.com/embed/mvuPvAmNItQ"}
];



document.addEventListener('DOMContentLoaded', init);

function init(){
    generateAside();
    let buttons = document.getElementsByClassName("logobtn");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', clickButton, false)
    }

    PDFObject.embed("assets/pdf/opgave.pdf","#pdfviewer");
}

function clickButton() {
    let chapter = this.getAttribute("data-chapter");
    let file = this.getAttribute("data-file");
    console.log(chapter);
    setPdf(chapter);
    setProgressBar(chapter);

}

function setPdf(chapter) {
    let pdf = getPdf(chapter);

    document.getElementById("title").innerHTML = pdf.title;
    PDFObject.embed(pdf.location,"#pdfviewer");
}

function setProgressBar(chapter) {
    let percent = (chapter/chapters.length)*100;
    document.getElementById("progress").style.width = percent+"%";
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

//////
////// HTML GENERATORS
//////

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

function getSectionHtml(section) {
    let html = "";
}

function getPdfHtml(pdf){
    let html = "";
    html += "<li>";
    html += "<h3>"+ pdf.chapter + ". " + pdf.title + "</h3>";
    html += "<li>"+ pdf.title +" pdf :"+" <img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton' data-chapter='"+ pdf.chapter +"' data-file='pdf'></li>"+"<li>"+ pdf.title +"<img src='assets/images/powerpoint.png' class='logobtn' alt='pttbutton' data-chapter='"+ pdf.chapter +"' data-file='ppt'/></li>";
    html += "</li>";
    return html;
}