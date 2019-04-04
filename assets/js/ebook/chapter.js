class Chapter {
    constructor(number, title) {
        this.number = number;
        this.title = title;
        this.pdfs = [];
        this.ppts = [];
        this.videos = [];
    }


    getHtml(partId) {
        let html = "";
        html += "<li class='chapter'>";
        html += "<h3>"+ this.number + ". " + this.title +"</h3>";
        html += "<ul>";
        this.pdfs.forEach(pdf => {
            html += pdf.getHtml();
        });
        this.ppts.forEach(ppt => {
            html += ppt.getHtml();
        });
        this.videos.forEach(video => {
            html += video.getHtml(partId, this.number);
        });
        html += "</ul>";
        html += "</li>";
        return html;
    }



    addPdf(pdf) {
        this.pdfs.push(pdf);
    }

    addPpt(ppt) {
        this.pdfs.push(ppt);
    }

    addVideo(video) {
        this.pdfs.push(video);
    }
}