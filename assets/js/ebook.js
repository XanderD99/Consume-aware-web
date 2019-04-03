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