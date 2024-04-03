import { atom, selector } from "recoil";

export const sem1State = atom({
    key: "sem1State",
    default: [
        { subject1: "Maths" },
        { subject2: "Science" },
        { subject3: "Computer Pheripherals" },
        { subject4: "Chemistry" },
        { subject5: "Physics" },
        { subject6: "" }
    ],
});



