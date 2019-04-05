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
        html += "</li>";
        return html;
    }

    display() {

        document.getElementById("title").innerHTML = this.title;
        document.getElementById("video").src = this.location;

        document.getElementById("video").style.display="inline";
        document.getElementById("down").style.display="none";
        document.getElementById("pdfviewer").style.display="none"

    }

    getId() {
        console.log(this.id);
        return this.id;
    }

}