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
    {number: 6, part: 2, title: "Consumer awareness relevance and strategies: consumer awareness implications on businesses"},
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
        location: "assets/pdf/Chapter_I.pdf",
        download: "assets/pdf/Chapter_I.pdf"
    },
    {
        id: 2,
        chapter: 2,
        part: 1,
        title: "Understanding consumption and consumer values",
        location: "assets/pdf/Chapter_II.pdf",
        download: "assets/pdf/Chapter_II.pdf"
    }
    ,
    {
        id: 3,
        chapter: 3,
        part: 1,
        title: "Customer awareness importance",
        location: "assets/pdf/Chapter_III.pdf",
        download: "assets/pdf/Chapter_III.pdf"
    }
    ,
    {
        id: 4,
        chapter: 4,
        part: 2,
        title: "Understanding the market and companies' behaviour",
        location: "assets/pdf/Chapter_IV.pdf",
        download: "assets/pdf/Chapter_IV.pdf"
    }
    ,
    {
        id: 5,
        chapter: 5,
        part: 2,
        title: "Companies' practices requiring consumers' protection",
        location: "assets/pdf/Chapter_V.pdf",
        download: "assets/pdf/Chapter_V.pdf"
    }
    ,
    {
        id: 6,
        chapter: 6,
        part: 2,
        title: "Consumer awareness relevance and strategies: consumer awareness implications on businesses",
        location: "assets/pdf/Chapter_VI.pdf",
        download: "assets/pdf/Chapter_VI.pdf"
    }
    ,
    {
        id: 7,
        chapter: 7,
        part: 3,
        title: "Consumer policy on European market: models and organizational structure",
        location: "assets/pdf/Chapter_VII.pdf",
        download: "assets/pdf/Chapter_VII.pdf"
    }
    ,
    {
        id: 8,
        chapter: 8,
        part: 3,
        title: "Consumer rights: national and European examples and practices",
        location: "assets/pdf/Chapter_VIII.pdf",
        download: "assets/pdf/Chapter_VIII.pdf"
    }
    ,
    {
        id: 9,
        chapter: 9,
        part: 3,
        title: "Customer rights understanding in services sector",
        location: "assets/pdf/Chapter_IX.pdf",
        download: "assets/pdf/Chapter_IX.pdf"
    }
    ,
    {
        id: 10,
        chapter: 10,
        part: 3,
        title: "Institutions of consumer rights protection",
        location: "assets/pdf/Chapter_X.pdf",
        download: "assets/pdf/Chapter_X.pdf"
    }
    ,
    {
        id: 11,
        chapter: 11,
        part: 3,
        title: "Building customer awareness",
        location: "assets/pdf/Chapter_XI.pdf",
        download: "assets/pdf/Chapter_XI.pdf"
    }




];

/*nog geen actuele data*/
let data_ppts = [
    {
        id: 12,
        chapter: 1,
        part: 1,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT1_CHPTR1.pdf",
        download: "assets/ppt/PPT_PRT1_CHPTR1.pptx"
    },
    {
        id: 13,
        chapter: 2,
        part: 1,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT1_CHPTR2.pdf",
        download: "assets/ppt/PPT_PRT1_CHPTR2.pptx"
    },

    {
        id: 14,
        chapter: 3,
        part: 1,
        title: "Customer awareness importance",
        location: "assets/pdf/PPT_PRT1_CHPTR3.pdf",
        download: "assets/ppt/PPT_PRT1_CHPTR3.pptx"
    },

    {
        id: 15,
        chapter: 4,
        part: 2,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT2_CHPTR4.pdf",
        download: "assets/ppt/PPT_PRT2_CHPTR4.pptx"
    },

    {
        id: 16,
        chapter: 5,
        part: 2,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT2_CHPTR5.pdf",
        download: "assets/ppt/PPT_PRT2_CHPTR5.pptx"
    },

    {
        id: 17,
        chapter: 6,
        part: 2,
        title: "Consumer awareness relevance and strategies",
        location: "assets/pdf/PPT_PRT2_CHPTR6.pdf",
        download: "assets/ppt/PPT_PRT2_CHPTR6.pptx"
    },

    {
        id: 18,
        chapter: 7,
        part: 3,
        title: "Consumer policy on European market",
        location: "assets/pdf/PPT_PRT3_CHPTR7.pdf",
        download: "assets/ppt/PPT_PRT3_CHPTR7.pptx"
    },

    {
        id: 19,
        chapter: 8,
        part: 3,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT3_CHPTR8.pdf",
        download: "assets/ppt/PPT_PRT3_CHPTR8.pptx"
    },

    {
        id: 20,
        chapter: 9,
        part: 3,
        title: "Customer rights understanding",
        location: "assets/pdf/PPT_PRT3_CHPTR9.pdf",
        download: "assets/ppt/PPT_PRT3_CHPTR9.pptx"
    },

    {
        id: 21,
        chapter: 10,
        part: 3,
        title: "Titel 1",
        location: "assets/pdf/PPT_PRT3_CHPTR10.pdf",
        download: "assets/ppt/PPT_PRT3_CHPTR10.pptx"
    },

    {
        id: 22,
        chapter: 11,
        part: 3,
        title: "Building consumer awareness",
        location: "assets/pdf/PPT_PRT3_CHPTR11.pdf",
        download: "assets/ppt/PPT_PRT3_CHPTR11.pptx"
    }
];

let data_videos = [
    {
        id: 23,
        chapter: 1,
        part: 1,
        title: "The psychology behind irrational decisions - Sara Garofalo",
        location: "https://www.youtube.com/embed/V2EMuoM5IX4"
    },
    {
        id: 24,
        chapter: 2,
        part: 1,
        title: "The importance of studying consumer behavior",
        location: "https://www.youtube.com/embed/v1q1nnPCcKw"
    },
    {
        id: 25,
        chapter: 3,
        part: 1,
        title: "Consumer protection - why it matters to you",
        location: "https://www.youtube.com/embed/__2LZvEc-5E"
    },

    {
        id: 26,
        chapter: 4,
        part: 2,
        title: "About the world's most ethical companies",
        location: "https://www.youtube.com/embed/w-yewtQY1wA"
    },
    {
        id: 27,
        chapter: 5,
        part: 2,
        title: "Huggy met votre famille sur écoute",
        location: "https://www.youtube.com/embed/wk9WxIbJ3Dg"
    },
    {
        id: 28,
        chapter: 5,
        part: 2,
        title: "Huggybug your family today': don't play around with children's online safety",
        location: "https://www.youtube.com/embed/C_W-VkQ4oSk"
    },
    {
        id: 29,
        chapter: 5,
        part: 2,
        title: "Safety and welfare for the food chain",
        location: "https://www.youtube.com/embed/Ok-UyG9fI6s"
    },

    {
        id: 30,
        chapter: 7,
        part: 3,
        title: "Consumer rights: EU presentation",
        location: "https://www.youtube.com/embed/PQnM-k4k0Z8"
    },

    {
        id: 31,
        chapter: 7,
        part: 3,
        title: "Question on your rights in Europe, complaint against a European trader: contact the ECC network",
        location: "https://www.youtube.com/embed/wmFL_4dDfuc"
    },

    { id: 32,
        chapter: 7,
        part: 3,
        title: "Consumer rights",
        location: "https://www.youtube.com/embed/UlU6Xlz9DD0"
    },

    {
        id: 33,
        chapter: 0,
        part: 3,
        title: "Online dispute resolution: fast, fair & convenient",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },

    {
        id: 34,
        chapter: 10,
        part: 3,
        title: "EU trade policy explained",
        location: "https://www.youtube.com/embed/IiOC5XG2I5Y"
    },

    {
        id: 35,
        chapter: 11,
        part: 3,
        title: "European Consumer Center (ECC)",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 36,
        chapter: 12,
        part: 3,
        title: "The 11 UN consumer protection guidelines",
        location: "https://www.youtube.com/embed/qwQwev8Zpcw"
    },

    {
        id: 37,
        chapter: 0,
        part: 0,
        title: "Protecting European consumers",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 38,
        chapter: 0,
        part: 0,
        title: "Greening the economy: lessons from Scandinavia",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    },
    {
        id: 39,
        chapter: 0,
        part: 0,
        title: "Tax and VAT issues when trading with countries in the EU",
        location: "https://www.youtube.com/embed/mvuPvAmNItQ"
    }
];

function generateParts(partId) {

    let ofparts = [];

    if(partId === NaN || partId === undefined || null) {
        partId = 0;
    } else {
        partId = parseInt(partId);
    }
    console.log(partId);
    data_parts.forEach(part => {
        if(partId === 0 || part.number === partId){
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
                        if (pdf.chapter === chapter.number) {
                            let newPdf = new Pdf(
                                pdf.id,
                                pdf.title,
                                pdf.location,
                                pdf.download
                            );

                            newChapter.addPdf(newPdf);
                    }
                    });
                    data_videos.forEach(video => {
                        if (video.chapter === chapter.number) {

                            let newVideo = new Video(
                                video.id,
                                video.title,
                                video.location,
                            );

                            newChapter.addVideo(newVideo);
                        }
                    });
                    data_ppts.forEach(ppt => {
                        if (ppt.part === chapter.number) {

                            let newPpt = new Ppt(
                                ppt.id,
                                ppt.title,
                                ppt.location,
                                ppt.download
                            );

                            newChapter.addPpt(newPpt);
                        }
                    });


                    newPart.addChapter(newChapter);
                }
            });
            ofparts.push(newPart);
        }
    });
    console.log(ofparts);
    parts= ofparts;
}