import { atom, selector } from "recoil";

export const sem1State = atom({
    key: "sem1State",
    default: [
        { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
        { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
    ],
});



