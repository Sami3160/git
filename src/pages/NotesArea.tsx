import "./NoresArea.css";

import SemisterArea from "../components/SemisterArea";

function NotesArea() {
    const queryParams = new URLSearchParams(location.search);
    let sub = queryParams.get('sub');
    // console.log(sub);
    if(!sub)sub='cse';
    const map:any={
        "cse":"Computer Science",
        "mech":"Mechanical",
        "entc":"E&TC",
        "civil":"Civil"
    }



    return (
        <div>
            <div className="coolbg  relative w-full p-10 -z-10 flex items-center">
                <div className="title container w-full flex flex-col justify-center sm:items-center my-4  bg-white p-4 rounded-xl border-[8px] opacity-80 shadow-2xl">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold ">
                        Browse All {map[sub]} Department Notes
                    </div>

                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold  font-mono">
                        Right Here...
                    </div>
                </div>
            </div>

            <SemisterArea  />
        </div >
    )
}


export default NotesArea