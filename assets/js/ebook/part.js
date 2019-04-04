class Part {
    constructor(number, title) {
        this.number = parseInt(number);
        this.title = title;
        this.chapters = [];
    }

    getId(){
        return this.number;
    }

    getHtml(){
        let html = "";

        html += "<li>";
        html += "<h2 id='color" + this.number + "'> Part "+ this.number + ": " + this.title + "</h2>";
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

    getChapter(id) {
        return this.chapters.filter(chapter => chapter.number === id)[0];
    }

}