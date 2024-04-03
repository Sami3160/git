import { atom, selector } from "recoil";

export const sem2State = atom({
    key: "sem2State",
    default: [
        { subject1: "Maths" },
        { subject2: "Science" },
        { subject3: "Computer Pheripherals" },
        { subject4: "Chemistry" },
        { subject5: "Physics" },
        { subject6: "" }
    ],
});



