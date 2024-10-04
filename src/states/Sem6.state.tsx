import { atom,  selectorFamily } from "recoil";

export const sem6State = atom({
    key: "sem6State",
    default: [
        { name: "System programming & complier instruction", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Artifical Intelligence", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Cryptography & System Security", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Data warehousing & mining", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Internet of Things ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Quantitative Analysis", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Mini-project 2B ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Enterprise Resource planning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Machine learning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }],
});



export const dynamicSem6State = selectorFamily({
    key: "dynamicSem6State",
    get: (sub) => ({  }) => {
        // const queryParams = new URLSearchParams(location.search);
        // const sub = queryParams.get('sub');
        switch (sub) {
            case 'cse':
                return [
                    { name: "System programming & complier instruction", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Artifical Intelligence", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Cryptography & System Security", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
                    { name: "Data warehousing & mining", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Internet of Things ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Quantitative Analysis", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Mini-project 2B ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Enterprise Resource planning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Machine learning", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }]
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
                    { name: "Electromagnetics and Antena", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Communication and Network", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Image processing and machine version", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
                    { name: "Artificial Neural Network and Fuzzy Logic ", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Radar Engineering", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Computer Organization and Architecture", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Skill Lab: Linux and Networking", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                ]
                break;
            case 'civil':
                return [
                    { name: "Maths", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
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


