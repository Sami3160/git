import { atom, selector } from "recoil";

export const sem4State = atom({
    key: "sem4State",
    default: [
        { name: "Engineering Mathematics 4", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Analysis Of Algorithm", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Database System", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Operating System", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Microprocessor", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Python programming", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});



