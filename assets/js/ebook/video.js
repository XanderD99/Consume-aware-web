class Video {
    constructor(id, title, location) {
        this.id = id;
        this.title = title;
        this.location = location;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton'>";//todo change this to video logo
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