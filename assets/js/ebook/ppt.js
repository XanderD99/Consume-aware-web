class Ppt {
    constructor(id, title, location, download) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.download = download;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li id='aside_li' class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/powerpoint.png' class='logobtn' alt='pptlogo'>";
        html += "<h4>"+ this.title +"</h4>";
        html += "<a id='download' href=''>    </a>";
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