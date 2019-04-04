let data_parts = [
    {number: 1, title: "Part 1: Consumers and consumption in Europe - general characteristics and consumer awareness Importance"},
    {number: 2, title: "Part 2: Companies' behaviour and consumer awareness relevance"},
    {number: 3, title: "Part 3: Consumer protection in Europe"}
];

let data_chapter = [
    {number: 1, part: 1, title: "Consumers and their behaviour on the market"},
    {number: 2, part: 1, title: "Understanding consumption and consumer values"},
    {number: 3, part: 1, title: "Customer awareness importance"},
    {number: 4, part: 2, title: "Understanding the market and companies' behaviour"},
    {number: 5, part: 2, title: "Companies' practices requiring consumers' protection"},
    {
        number: 6,
        part: 2,
        title: "Consumer awareness relevance and strategies: consumer awareness implications on businesses"
    },
    {number: 7, part: 3, title: "Consumer policy on European market: models and organizational structure"},
    {number: 8, part: 3, title: "Consumer rights: national and European examples and practices"},
    {number: 9, part: 3, title: "Customer rights understanding in services sector"},
    {number: 10, part: 3, title: "Institutions of consumer rights protection"},
    {number: 11, part: 3, title: "Building customer awareness"}
];


let data_pdfs = [
    {
        id: 1,
        chapter: 1,
        part: 1,
        title: "Understanding consumer behavior",
        location: "assets/pdf/Part1_Chapter1.pdf",
        download: "assets/pdf/Part1_Chapter1.pdf"
    },
    {
        id: 3,
        chapter: 3,
        part: 1,
        title: "Customer awareness importance",
        location: "assets/pdf/Part1_Chapter3.pdf",
        download: "assets/pdf/Part1_Chapter3.pdf"
    }
];

/*nog geen actuele data*/
let data_ppts = [
    {
        id: 1,
        chapter: 1,
        part: 1,
        title: "Titel 1",
        location: "assets/pdf/A title.pdf",
        download: "assets/pdf/A title.pdf"
    },
    {
        id: 2,
        chapter: 2,
        part: 1,
        title: "Titel 2",
        location: "assets/pdf/Life is good.pdf",
        download: "assets/pdf/Life is good.pdf"
    },
    {
        id: 3,
        chapter: 3,
        part: 2,
        title: "Titel 3",
        location: "assets/pdf/opgave.pdf",
        download: "assets/pdf/opgave.pdf"
    },
    {
        id: 4,
        chapter: 4,
        part: 2,
        title: "Titel 4",
        location: "assets/pdf/opgave.pdf",
        download: "assets/pdf/opgave.pdf"
    }
];

let data_videos = [
    {
        id: 1,
        chapter: 1,
        part: 1,
        title: "The psychology behind irrational decisions - Sara Garofalo",
        location: "https://www.youtube.com/embed/V2EMuoM5IX4"
    },
    {chapter: 1, part: 1, title: "The paradox of value", location: "https://www.youtube.com/embed/e7S8jWh6AEs"},

    {
        id: 2,
        chapter: 2,
        part: 1,
        title: "The importance of studying consumer behavior",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 3,
        chapter: 3,
        part: 1,
        title: "Consumer protection - why it matters to you",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 4,
        chapter: 4,
        part: 2,
        title: "About the world's most ethical companies",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 5,
        chapter: 5,
        part: 2,
        title: "Huggy met votre famille sur écoute",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 6,
        chapter: 5,
        part: 2,
        title: "Huggybug your family today': don't play around with children's online safety",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 7,
        chapter: 5,
        part: 2,
        title: "Safety and welfare for the food chain",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },

    {
        id: 8,
        chapter: 7,
        part: 3,
        title: "Consumer rights: EU presentation",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 9,
        chapter: 7,
        part: 3,
        title: "Question on your rights in Europe, complaint against a European trader: contact the ECC network",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    { id: 10, chapter: 7, part: 3, title: "Consumer rights", location: "https://www.youtube.com/embed/mvuPvAmNItQ"},
    {
        id: 11,
        chapter: 7,
        part: 3,
        title: "Online dispute resolution: fast, fair & convenient",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {id: 12, chapter: 10, part: 3, title: "EU trade policy explained", location: "https://www.youtube.com/embed/IiOC5XG2I5Y"},
    {
        id: 13,
        chapter: 11,
        part: 3,
        title: "European Consumer Center (ECC)",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 14,
        chapter: 12,
        part: 3,
        title: "The 11 UN consumer protection guidelines",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },

    {
        id: 15,
        chapter: 0,
        part: 0,
        title: "Protecting European consumers",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 16,
        chapter: 0,
        part: 0,
        title: "Greening the economy: lessons from Scandinavia",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 17,
        chapter: 0,
        part: 0,
        title: "Tax and VAT issues when trading with countries in the EU",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    }
];

function generateParts() {

    let parts = [];

    data_parts.forEach(part => {
        let newPart = new Part(
            part.number,
            part.title
        );
        data_chapter.forEach(chapter => {
            if (chapter.part === part.number) {
                let newChapter = new Chapter(
                    chapter.number,
                    chapter.title);


                data_pdfs.forEach(pdf => {
                if (pdf.part === part.number) {

                    let newPdf = new Pdf(
                        pdf.id,
                        pdf.title,
                        pdf.location,
                        pdf.download
                    );
                    chapter.addPdf(newPdf);
                }
                });
                data_videos.forEach(vid => {
                    if(vid.chapter === chapter.number ){
                        let newVideo = new Video(
                            vid.id,
                            vid.title,
                            vid.location
                        );
                        chapter.addVideo(newVideo);
                    }

                });
                data_ppts.forEach(ppt => {
                    if(ppt.chapter === chapter.number){

                        let newPPT = new Ppt(
                            ppt.id,
                            ppt.title,
                            ppt.location,
                            ppt.download
                        );
                        chapter.addPpt(newPPT);
                    }
                });

                part.addChapter(chapter);
            }
        });
        parts.push(newPart);
    });
    console.log(parts + "hallo");

}