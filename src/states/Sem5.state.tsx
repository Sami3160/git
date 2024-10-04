import { atom,  selectorFamily } from "recoil";

export const sem5State = atom({
  key: "sem5State",
  default: [
    { name: "Data Warehousing and mining", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
    { name: "Computer Network", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
    { name: "Theory of computer science", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
    { name: "Software Engineering", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
    { name: "Internet Programming", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
    { name: "Prof. Comm. & Ethics", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
  ],
});




export const dynamicSem5State = selectorFamily({
  key: "dynamicSem5State",
  get: (sub) => ({  }) => {
    // const queryParams = new URLSearchParams(location.search);
    // const sub = queryParams.get('sub');
    switch (sub) {
      case 'cse':
        return [
          { name: "Data Warehousing and mining", totalC: 12, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Computer Network", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Theory of computer science", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
          { name: "Software Engineering", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Internet Programming", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Prof. Comm. & Ethics", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
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
          { name: "Digital Communication", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Descrete Time Signal Processing", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Digital VLSI", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Random Signal Analysis", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "DLOC: Data Compression and Cryptography", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "DLOC: IT Infra and Security", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          { name: "Professional Communication and Ethics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
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


