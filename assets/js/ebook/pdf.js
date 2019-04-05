class Pdf {
    constructor(id, title, location, download) {
        this.id = parseInt(id);
        this.title = title;
        this.location = location;
        this.download = download;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li id='aside_li' class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/pdflogo.png' class='logobtn' alt='pdfbutton'>"+"<h4>"+ this.title +"</h4>" ;
        html += "<a class='download' href='"+this.download+"' download='"+this.title+"'>    </a>";
        html += "</li>";
        return html;
    }

    display() {
        PDFObject.embed(this.location,"#pdfviewer");
        document.getElementById("title").innerHTML = this.title;
        let download = document.getElementById("down");
        download.href = this.download;
        download.download = this.title;

        document.getElementById("video").style.display="none";
        document.getElementById("down").style.display="inline";
        document.getElementById("pdfviewer").style.display="inline"
    }

    getId() {
        return this.id;
    }

}
