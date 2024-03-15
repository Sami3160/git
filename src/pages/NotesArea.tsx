import "./NoresArea.css";
// import "../images/wave2.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
function NotesArea() {
    const [isHeadOpen, setHeadOpen] = useState(true);
    const head = useRef<HTMLDivElement | null>(null);
    function onHideClick() {
        if (isHeadOpen && head.current) {
            head.current.style.display = "none";
        } else if (!isHeadOpen && head.current) {
            head.current.style.display = "block";
        }
        setHeadOpen(state => !state);
    }
    function handleSem(context: any): void {
        let choice: string = context.target.innerText;
        console.log(choice);
        let list = document.querySelector('.data');
        context.target.setAttribute("className", ".active")
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
                <div className="content grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:grid-cols-1">
                    <div className="head col-span-1 p-3 flex sm:justify-center  bg-blue-300 rounded-xl w-full" ref={head}>
                        <div className="data relative grid grid-rows-8 grid-cols-1 md:grid-cols-8 md:grid-rows-1 text-sm space-y-2 md:space-x-3 lg:space-x-10">
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
                                className="sem">
                                <button>Sem-II</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-III</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-IV</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-V</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-VI</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-VII</button>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 1.2, color: '#000000' }}
                                onClick={handleSem}
                                transition={{ duration: 0.4 }}
                                className="sem">
                                <button>Sem-VIII</button>
                            </motion.div>


                        </div>
                    </div>
                    <div className="cardArea col-span-3  relative bg-slate-200 opacity-85 rounded-lg">
                        <div className="close absolute top-1/2 left-0 text-white   sm:hidden" onClick={onHideClick}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesArea