import { atom, selector } from "recoil";

export const sem5State = atom({
    key: "sem5State",
    default: [
        { name: "Data Warehousing and mining", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Computer Network", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Theory of computer science", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Software Engineering", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Internet Programming", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Prof. Comm. & Ethics", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});



