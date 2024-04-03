import "./NoresArea.css";
// import "../images/wave2.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import { useRecoilState } from "recoil";
import { sem1State } from "../states/Sem1.state";
import { sem2State } from "../states/Sem2.state";
// import { sem3State } from "../states/Sem3.state";
// import { sem4State } from "../states/Sem4.state";
// import { sem5State } from "../states/Sem5.state";
// import { sem6State } from "../states/Sem6.state";
// import { sem7State } from "../states/Sem7.state";
// import { sem8State } from "../states/Sem8.state";

function NotesArea() {
    const [sideBar, setSideBar] = useState(false);
    const head = useRef<HTMLDivElement | null>(null);
    const contentArea = useRef<HTMLDivElement | null>(null);
    const [sem1, setSem1] = useRecoilState(sem1State);
    const [sem2, setSem2] = useRecoilState(sem2State);
    const [sem3, setSem3] = useRecoilState(sem3State);

    const semDatRef: Record<string, string> = {
        "Sem-I": "sem1State",
        "Sem-II": "sem2State",
        "Sem-III": "sem3State",
        "Sem-IV": "sem4State",
        "Sem-V": "sem5State",
        "Sem-VI": "sem6State",
        "Sem-VII": "sem7State",
        "Sem-VIII": "sem8State"
    }

    function onHideClick() {
        if (sideBar && head.current) {
            head.current.classList.add("hidden");
            contentArea.current?.classList.add("col-span-4");
        } else if (sideBar == false && head.current) {
            head.current.classList.remove("hidden");
            contentArea.current?.classList.remove("col-span-4");
        }
        setSideBar(state => !state);
    }
    function handleSem(eleContext: any): void {
        let choice: string = eleContext.target.innerText;
        console.log(choice);
        let list = document.querySelector('.data');
        eleContext.target.setAttribute("className", ".active")

        if (list) {
            for (let ele of list.children as any) {
                ele.removeAttribute(".active");
            }
        }

    }
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

            <div className=" bg-[#1e2a45]  p-0 sm:p-8 md:p-16">
                <div className="content grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:grid-cols-1 md:p-2" >
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 1 }}
                        className="head semList col-span-1 p-3 h-fit flex flex-col  space-y-2 justify-between items-center
                    text-xm md:text-lg text-xs sm:text-sm md:font-extrabold
                    md:items-end md:flex-row bg-blue-300 sm:rounded-xl md:my-3" ref={head}>

                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem">
                            <button>Sem-I</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-II</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-III</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-IV</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-V</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-VI</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-VII</button>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 1.2, color: '#000000' }}
                            onClick={handleSem}
                            transition={{ duration: 0.4 }}
                            className="sem " >
                            <button>Sem-VIII</button>
                        </motion.div>


                        {/* </div> */}
                    </motion.div>
                    <div className="cardArea col-span-3 md:row-span-3 relative bg-slate-200 opacity-85 h-[69vh] sm:h-full w-full shadow-inner sm:rounded-lg" ref={contentArea}>
                        <div className="close absolute top-1/2 left-0 text-white   sm:hidden" onClick={onHideClick}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="h-6 w-6" />
                        </div>
                        <div className="data grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
                            <div className="card bg-white p-2 rounded-lg shadow-2xl">
                                <div className="title text-2xl font-bold">Subject Name</div>
                                <div className="content text-lg">Content</div>
                            </div>
                            <div className="card bg-white p-2 rounded-lg shadow-2xl">
                                <div className="title text-2xl font-bold">Subject Name</div>
                                <div className="content text-lg">Content</div>
                            </div>
                            <div className="card bg-white p-2 rounded-lg shadow-2xl">
                                <div className="title text-2xl font-bold">Subject Name</div>
                                <div className="content text-lg">Content</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default NotesArea