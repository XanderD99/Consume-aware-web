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
            html += pdf.getHtml(partId, this.number);
        });
        this.ppts.forEach(ppt => {
            html += ppt.getHtml(partId, this.number);
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
        this.ppts.push(ppt);
    }

    addVideo(video) {
        this.videos.push(video);
    }

    getFile(id) {
        id = parseInt(id);
        if(this.pdfs.filter(pdf => parseInt(pdf.getId()) === id)[0] !== null) {
            return this.pdfs.filter(pdf => parseInt(pdf.getId()) === id)[0]
        }

        if(this.ppts.filter(ppt => parseInt(ppt.getId()) === id)[0] !== null) {
            return this.ppts.filter(ppt => parseInt(ppt.getId())=== id)[0]
        }
        if(this.videos.filter(video => parseInt(video.getId()) === id)[0] !== null) {
            return this.videos.filter(video => parseInt(video.getId()) === id)[0]
        }
    }
}