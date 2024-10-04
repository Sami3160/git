import { atom,  selectorFamily } from "recoil";

export const sem8State = atom({
    key: "sem8State",
    default: [
        { name: "Human machine Interaction", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Distributed Computing.", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "DLOC : Natural Language  Processing", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Cloud Computing Lab", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Social media Analytics ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Human Resource Management", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "IOLC : Applied Data  Science", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
    ],
});


export const dynamicSem8State = selectorFamily({
    key: "dynamicSem8State",
    get:(sub)=> ({  }) => {
        // const queryParams = new URLSearchParams(location.search);
        // const sub = queryParams.get('sub');
        switch (sub) {
            case 'cse':
                return [
                    { name: "Human machine Interaction", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Distributed Computing.", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC : Natural Language  Processing", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
                    { name: "Cloud Computing Lab", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "IOLC : Social media Analytics ", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "IOLC : Human Resource Management", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "IOLC : Applied Data  Science", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
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
                    { name: "RF Designs", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Wireless Network", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC: Satellite Communication", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "ILOC: Enviroment Management", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "DLOC: Network Management in Telecommunication", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
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


