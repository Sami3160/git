import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { lazy, useRef, useState, Suspense } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { sem1State } from '../states/Sem1.state';
import { sem2State } from '../states/Sem2.state';
import { sem3State } from '../states/Sem3.state';
import { sem4State } from '../states/Sem4.state';
import { sem5State } from '../states/Sem5.state';
import { sem6State } from '../states/Sem6.state';
import { sem7State } from '../states/Sem7.state';
import { sem8State } from '../states/Sem8.state';
import CardLoading from './CardLoading';
const Subject = lazy(() => import("./Subject"));

const SemisterArea = () => {
    const [sideBar, setSideBar] = useState(false);
    const [subjectsArea, setSubjectsArea] = useState<any>([]);
    const head = useRef<HTMLDivElement | null>(null);
    const contentArea = useRef<HTMLDivElement | null>(null);
    const [sem1, setSem1] = useRecoilState(sem1State);
    const [sem2, setSem2] = useRecoilState(sem2State);
    const [sem3, setSem3] = useRecoilState(sem3State);
    const [sem4, setSem4] = useRecoilState(sem4State);
    const [sem5, setSem5] = useRecoilState(sem5State);
    const [sem6, setSem6] = useRecoilState(sem6State);
    const [sem7, setSem7] = useRecoilState(sem7State);
    const [sem8, setSem8] = useRecoilState(sem8State);
    interface Subject {
        name: string;
        totalC: number;
        questionC: number;
        notesC: number;
        onlineRefC: number;
    }
    const semDatRef: Record<string, typeof sem1> = {
        "Sem-I": sem1,
        "Sem-II": sem2,
        "Sem-III": sem3,
        "Sem-IV": sem4,
        "Sem-V": sem5,
        "Sem-VI": sem6,
        "Sem-VII": sem7,
        "Sem-VIII": sem8
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
        setSubjectsArea(semDatRef[choice]);

        if (list) {
            for (let ele of list.children as any) {
                ele.removeAttribute(".active");
            }
        }

    }
    return (
        <div className=" bg-[#1e2a45]  p-0 sm:p-8 md:p-16">
            <div className="content grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:grid-cols-1 md:p-2" >
                <motion.div
                    initial="hidden"
                    transition={{ duration: 1 }}
                    className="head semList col-span-1 p-3 h-full sm:h-[55em] md:h-fit flex flex-col  space-y-2 justify-between items-center
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
                <div className="cardArea col-span-3 md:row-span-3 
                relative bg-slate-200 opacity-85 h-[60vh] 
                lg:h-[70vh] md:h-[60vh]  sm:h-[80vh] w-full shadow-inner sm:rounded-lg overflow-scroll" ref={contentArea}>
                    <div className="close absolute top-1/2 left-0 text-white  sm:hidden " onClick={onHideClick}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} className="h-6 w-6" />
                    </div>
                    <div className="data grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 gap-4 p-4 overflow-scroll" style={{overflow:'auto'}}>
                        {/* <div className="card bg-white p-2 rounded-lg shadow-2xl">
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
                        </div> */}
                        Hello

                        {subjectsArea && subjectsArea.map((subject: Subject, index: number) => {
                            if (typeof subject === 'object' && subject !== null) {
                                return (
                                    <Suspense key={index} fallback={<CardLoading/>}>
                                        <Subject {...subject} />
                                    </Suspense>
                                )
                            }
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SemisterArea;