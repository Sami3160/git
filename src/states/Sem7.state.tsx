import { atom, selector } from "recoil";

export const sem7State = atom({
    key: "sem7State",
    default: [
        { name: "Aritifical Intelligence and Soft Computing ", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Mobile Communication & Computing", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Digital Signal  & image processing", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Big data & analytics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Advanced System Security & digital forensic", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Cyber security and laws(ILOC)", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Project 1(Computer)", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});



