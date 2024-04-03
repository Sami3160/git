import "./NoresArea.css";
// import "../images/wave2.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import { useRecoilState } from "recoil";
import { sem1State } from "../states/Sem1.state";
import { sem2State } from "../states/Sem2.state";
import { sem3State } from "../states/Sem3.state";
// import { sem4State } from "../states/Sem4.state";
// import { sem5State } from "../states/Sem5.state";
// import { sem6State } from "../states/Sem6.state";
// import { sem7State } from "../states/Sem7.state";
// import { sem8State } from "../states/Sem8.state";
import SemisterArea from "../components/SemisterArea";

function NotesArea() {
    const [sideBar, setSideBar] = useState(false);
    const head = useRef<HTMLDivElement | null>(null);
    const contentArea = useRef<HTMLDivElement | null>(null);
    const [sem1, setSem1] = useRecoilState(sem1State);
    const [sem2, setSem2] = useRecoilState(sem2State);
    const [sem3, setSem3] = useRecoilState(sem3State);


    // function onHideClick() {
    //     if (sideBar && head.current) {
    //         head.current.classList.add("hidden");
    //         contentArea.current?.classList.add("col-span-4");
    //     } else if (sideBar == false && head.current) {
    //         head.current.classList.remove("hidden");
    //         contentArea.current?.classList.remove("col-span-4");
    //     }
    //     setSideBar(state => !state);
    // }
    // function handleSem(eleContext: any): void {
    //     let choice: string = eleContext.target.innerText;
    //     console.log(choice);
    //     let list = document.querySelector('.data');
    //     eleContext.target.setAttribute("className", ".active")

    //     if (list) {
    //         for (let ele of list.children as any) {
    //             ele.removeAttribute(".active");
    //         }
    //     }

    // }
    return (
        <div>
            <div className="coolbg  relative w-full p-10 -z-10 flex items-center">
                <div className="title container w-full flex flex-col justify-center sm:items-center my-4  bg-white p-4 rounded-xl border-[8px] opacity-80 shadow-2xl">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold ">
                        Browse All Computer Science Department Notes
                    </div>

                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold  font-mono">
                        Right Here...
                    </div>
                </div>
            </div>

            <SemisterArea />
        </div >
    )
}


export default NotesArea