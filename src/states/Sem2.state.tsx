import { atom, selector } from "recoil";

export const sem2State = atom({
    key: "sem2State",
    default: [
        { name: "Maths Ultra" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
        { name: "C" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "C++" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Electronics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Mechanics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Yeahhh boiii" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
    ],
});



