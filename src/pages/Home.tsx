import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons'
import gharda from '../images/gharda.png'
import { motion, useScroll, useTransform } from "framer-motion"
import temp from '../images/temp.png'
import { NavLink } from 'react-router-dom'

import bg from '../images/parallexpt1.jpg'
import { useRef } from 'react'

function Home() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ref2 = useRef(null)
    const { scrollYProgress: scrollP2 } = useScroll({
        target: ref2,
        offset: ["start start", "end start"]
    })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
    const card = useTransform(scrollP2, [0, 1], ["0%", "100%"])

    return (
        <div className='w-full '>
            <div ref={ref} className="heading mx-16 relative rounded-2xl shadow-2xl " >

                <div className="title absolute top-0 flex flex-col space-y-5 text-[#333A73] my-10 mx-auto" >
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ y: textY }}

                        // delay={0.5}

                        className='text-7xl font-extrabold mx-auto z-10'>
                        Explore & Elevate,
                    </motion.div>

                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ y: textY }}

                        className='text-7xl font-extrabold mx-auto z-10'>
                        GIT Knowledge Hub
                        <FontAwesomeIcon icon={faStar} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="decription font-mono drop-shadow-xl top-0 mx-16 text-md flex text-center z-10 text-[#387ADF]"


                        style={{ border: "2px solid #387ADF", borderRadius: "10px", padding: "10px", y: bgY }}
                    >
                        <p>
                            "Explore the digital haven for CSE enthusiasts at GIT!
                            Dive into semester-wise notes, contributed by top minds globally.
                            Plus, unleash your own wisdom by uploading personalized gems.
                            Learning made dynamic, only at Gharda Institute Of Technology!"
                        </p>

                    </motion.div>
                </div>


                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="headImg w-full  rounded-xl opacity-[0.9]">

                    <img src={gharda} alt="" height={"auto"} width={"100%"} className='w-[100%] h-auto rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className="headImg absolute w-full h-auto top-0 -z-20 rounded-xl opacity-[0.6]">

                    <img src={bg} alt="" height={"auto"} width={"100%"} className='w-[100%] h-auto rounded-3xl' />
                </motion.div>
            </div>




            {/* special button */}
            <motion.div
                initial={{ x: -1000, scale: 0.5 }}
                whileInView={{ x: 0, scale: 1.7 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                viewport={{ once: true }}
                className="special my-20 flex justify-center relative">
                <NavLink to="#" >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn relative bg-[#FBA834] text-white text-2xl font-semibold p-4 ">
                        <FontAwesomeIcon icon={faBook} className='mx-1' />
                        Visit Notes!
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3}}
                        className='absolute top-0 left-0   text-white text-2xl font-semibold p-4  bg-yellow-600'>
                        Visit Notes!

                    </motion.div>

                </NavLink>
            </motion.div>


            <div ref={ref2}>

                <div className='text-5xl my-12 font-sans flex flex-auto justify-center text-[#333A73] p-4'>
                    Total content on the website
                </div>
                <motion.div
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="features grid grid-cols-3 my-15 px-32 bg-[#fba8342f] p-10">
                    <motion.div

                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                        // style={{ y: card }}
                        className="card col-span-1 w-full h-56  p-2">
                        <div className="cardContent p-2 shadow-xl mx-auto rounded-lg w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <h1></h1>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                        className="card col-span-1 w-full h-56  p-2">
                        <div className="cardContent p-2 shadow-xl mx-auto rounded-lg w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
                        className="card col-span-1 w-full h-56  p-2">
                        <div className="cardContent p-2 shadow-xl mx-auto rounded-lg w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">

                        </div>
                    </motion.div>
                </motion.div>
            </div>




            <div className="info m-32 space-y-4">
                <div className="cardType2 flex flex-row justify-between items-center ">
                    <div className='h-auto w-[34rem] '>
                        <img src={temp} alt="" />
                    </div>
                    <div className='text-4xl '>The Gharda Institute Of Technolygy...</div>
                </div>


                <div className="cardType2 flex flex-row justify-between items-center ">
                    <div className='text-4xl '>The Gharda Institute Of Technolygy...</div>
                    <div className='h-auto w-[34rem] '>
                        <img src={temp} alt="" />
                    </div>
                </div>


                <div className="cardType2 flex flex-row justify-between items-center ">
                    <div className='h-auto w-[34rem] '>
                        <img src={temp} alt="" />
                    </div>
                    <div className='text-4xl '>The Gharda Institute Of Technolygy...</div>
                </div>


                <div className="cardType2 flex flex-row justify-between items-center ">
                    <div className='text-4xl '>The Gharda Institute Of Technolygy...</div>
                    <div className='h-auto w-[34rem] '>
                        <img src={temp} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Home