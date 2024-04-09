import { atom, selector } from "recoil";

export const sem8State = atom({
    key: "sem8State",
    default: [
        { name: "Human machine Interaction", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Distributed Computing.", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Natural Language  Processing", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Cloud Computing Lab", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Social media Analytics ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Human Resource Management", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Applied Data  Science", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
    ],
});

