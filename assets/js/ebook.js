"use strict";

let parts = [
    {number: 1, title: "Insert a part title in this place"}
];

let pdfs = [
    {chapter:1, part:getPart(1), title:"Insert title here", location:"assets/pdf/A title.pdf"},
    {chapter:2, part:getPart(1), title:"Insert title here", location:"assets/pdf/Life is good.pdf"},
    {chapter:2, part:getPart(1), title:"Insert title here", location:"assets/pdf/opgave.pdf"},
];

document.addEventListener('DOMContentLoaded', init);

function init(){
    console.log(pdfs[0]);
    PDFObject.embed("assets/pdf/opgave.pdf","#pdfviewer");
}

function getPart(number) {
    console.log(parts);
    return parts.filter(part => part.number = number)[0]
}

function generateAside(){


}

function getPartHtml(part){

}

function getPdfHtml(pdf){

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