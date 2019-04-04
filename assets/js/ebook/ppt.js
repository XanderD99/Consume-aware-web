class Ppt {
    constructor(id, title, location, download) {
        this.id = parseInt(id);
        this.title = title;
        this.location = location;
        this.download = download;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li id='aside_li' class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/powerpoint.png' class='logobtn' alt='pptlogo'>";
        html += "<h4>"+ this.title +"</h4>";
        html += "<a class='download' href='"+this.download+"' download='"+this.title+"'>    </a>";
        html += "</li>";
        return html;
    }

    display() {
        DFObject.embed(this.location,"#pdfviewer");
        document.getElementById("title").innerHTML = this.title;
        let downloadd = document.getElementById("down");
        downloadd.href = this.download;
        download.download = this.title;
    }

    getId() {
        return this.id;
    }
}