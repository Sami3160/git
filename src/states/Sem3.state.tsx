import { atom,  selectorFamily } from "recoil";

export const sem3State = atom({
    key: "sem3State",
    default: [
        { name: "Applied Mathematics 3", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Discrete structure and graph theory", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Data Structure", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Digital logic And Computer Architecture", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Computer Graphics", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "OOP With Java", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});




export const dynamicSem3State = selectorFamily({
    key: "dynamicSem3State",
    get: (sub) => ({  }) => {
        // const queryParams = new URLSearchParams(location.search);
        // const sub = queryParams.get('sub');
        switch (sub) {
            case 'cse':
                return [
                    { name: "Applied Mathematics 3", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Discrete structure and graph theory", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Data Structure", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
                    { name: "Digital logic And Computer Architecture", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Graphics", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "OOP With Java", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'mech':
                return [
                    { name: "Maths", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'entc':
                return [
                    { name: "Engineering Maths 3", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Electronic Devices Circuits", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Digital System Design", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Network Theory", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Electronic Instrumentation and Control System", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Skill Lab: Java & Cpp", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'civil':
                return [
                    { name: "Maths1", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            default:
                return [
                    { name: "Maths", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
        }

    }
});


