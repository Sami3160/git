import { atom,  selectorFamily } from "recoil";

export const sem7State = atom({
    key: "sem7State",
    default: [
        { name: "Aritifical Intelligence and Soft Computing ", totalC:12, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Mobile Communication & Computing", totalC: 21, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Digital Signal  & image processing", totalC: 8, questionC: 7, notesC: 6, onlineRefC: 0 },
        { name: "Big data & analytics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Advanced System Security & digital forensic", totalC: 8, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Cyber security and laws(ILOC)", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Project 1(Computer)", totalC: 9, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});




export const dynamicSem7State = selectorFamily({
    key: "dynamicSem7State",
    get:(sub)=> ({  }) => {
        // const queryParams = new URLSearchParams(location.search);
        // const sub = queryParams.get('sub');
        switch (sub) {
          case 'cse':
            return [
              { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
              { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
            ]
            break;
          case 'mech':
            return [
              { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
              { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
            ]
            break;
          case 'entc':
            return [
                { name: "Microwave Engineering" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
                { name: "Mobile Communication System" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
                { name: "DLOC3: Deep Learning" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
                { name: "DLOC4: Internet Communication Engineering" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
                { name: "ILOC: Cyber Security and Laws" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
                 ]
            break;
          case 'civil':
            return [
              { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
              { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
            ]
            break;
          default:
            return [
              { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
              { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
              { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
            ]
            break;
        }
       
    }
  });
  
  
  