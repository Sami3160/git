import { atom, selector } from "recoil";

export const sem6State = atom({
    key: "sem6State",
    default: [
        { name: "System programming & complier instruction", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Artifical Intelligence", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Cryptography & System Security", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Data warehousing & mining", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Internet of Things ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Quantitative Analysis", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Mini-project 2B ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Enterprise Resource planning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Machine learning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});


