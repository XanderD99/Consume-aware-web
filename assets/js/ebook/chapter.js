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
        this.pdfs.push(ppt);
    }

    addVideo(video) {
        this.pdfs.push(video);
    }

    getFile(id) {
        console.log(id);
        console.log(this.pdfs[0].getId());
        console.log(this.pdfs.filter(pdf => pdf.number === id));
        console.log(this.ppts.filter(ppt => ppt.number === id));
        console.log(this.videos.filter(video => video.number === id));
        if(this.pdfs.filter(pdf => pdf.getId() === id)[0] === null) {
            return this.pdfs.filter(pdf => pdf.number === id)[0]
        }

        if(this.ppts.filter(ppt => ppt.getId() === id)[0] === null) {
            return this.ppts.filter(ppt => ppt.number === id)[0]
        }
        if(this.videos.filter(video => video.getId() === id)[0]) {
            return this.videos.filter(video => video.number === id)[0]
        }
    }
}