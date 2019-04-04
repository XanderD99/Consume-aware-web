class Part {
    constructor(number, title) {
        this.number = number;
        this.title = title;
        this.chapters = [];
    }

    getHtml(){
        let html = "";
        html += "<li>";
        html += "<h2>Part "+ this.number + ": " + this.title + "</h2>";
        html += "<ul>";
        this.chapters.forEach(chapter => {
            html += chapter.getHtml(this.number);
        });
        html += "</ul>";
        html += "</li>";
        return html;
    }

    addChapter(chapter) {
        this.chapters.push(chapter);
    }

}