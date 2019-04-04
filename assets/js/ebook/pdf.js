class Pdf {
    constructor(id, title, location, download) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.download = download;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton'>";
        html += "<h4>"+ this.title +"</h4>";
        html += "<a href=''>Download</a>";//todo change this to logo
        html += "</li>";
        return html;
    }

    display() {
        PDFObject.embed(this.location,"#pdfviewer");
    }

    getId() {
        return this.id;
    }
}
