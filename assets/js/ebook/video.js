class Video {
    constructor(id, title, location) {
        this.id = parseInt(id);
        this.title = title;
        this.location = location;
    }

    getHtml(partId, chapterId){
        let html = "";
        html += "<li id='aside_li' class='file' data-part='"+partId+"' data-chapter='"+chapterId+"' data-file='"+this.id+"'>";
        html += "<img src='assets/images/youtubelogo.png' class='logobtn' alt='`videobutton'>";//todo change this to video logo
        html += "<h4>"+ this.title +"</h4>";
        html += "<a id='download' href=''>    </a>";
        html += "</li>";
        return html;
    }

    display() {
        DFObject.embed(this.location,"#pdfviewer");
        document.getElementById("title").innerHTML = this.title;

    }

    getId() {
        return this.id;
    }
}