import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons'
import { motion, useScroll, useTransform } from "framer-motion"
import gharda from '../images/gharda.png'
import { NavLink } from 'react-router-dom'
import "./Home.css"

import bg from '../images/parallexpt1.jpg'
import { useEffect, useRef } from 'react'

function Home() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ref2 = useRef(null)
    // const { scrollYProgress: scrollP2 } = useScroll({
    //     target: ref2,
    //     offset: ["start start", "end start"]
    // })
    useEffect(() => {
        document.title = "Welcome to GIT Knowledge Hub"
    }, [])
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
    // const card = useTransform(scrollP2, [0, 1], ["0%", "100%"])


    return (
        <div className='w-full '>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={bg} alt="" className='w-full h-full top-0 absolute -z-1' />
                    <img src={gharda} alt="Background Image" className="object-cover absolute z-1 object-center w-full h-full" />
                    <div className="absolute inset-0 w-1/3  backdrop-blur-sm  z-20  top-0 right-0 translate-x-[190%] bg-black/30 ">

                        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                            <h1 className="text-5xl font-bold leading-tight mb-4">Explore & Elevate, GIT Knowledge Hub</h1>
                            <p className="text-lg text-gray-300 mb-8">
                                Explore the digital haven for students at GIT!
                                Dive into semester-wise notes, contributed by top minds globally.
                            </p>
                            <motion.div className="special w-full mt-10 flex flex-col justify-center items-center" >

                                <NavLink to={"/notes?sub=cse"}>

                                    <div className="button mx-auto ">
                                        <motion.div
                                            initial={{ x: -200, scale: 0.5 }}
                                            whileHover={{ scale: 1.3, boxShadow: "0px 0px 10px 0px #387ADF" }}
                                            whileInView={{ x: 0, scale: 1 }}
                                            transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                                            // href="#_" 
                                            className="relative inline-flex  items-center bg-white justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <FontAwesomeIcon icon={faBook} />  </svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease" > Visit Notes</span>
                                            <span className="relative invisible">Visit Notes</span>
                                        </motion.div>

                                    </div>
                                </NavLink>

                            </motion.div>
                            {/* <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a> */}
                        </div>
                    </div>
                </div>

            </div>




            {/* special button */}

            <MidHeroSection/>




            <div ref={ref2} className=''>
                <div className='text-5xl mt-8 font-sans flex flex-auto justify-center z-32 text-[#333A73] p-4 mb-0'>
                    Total content on the website
                </div>
            </div>


            <div className="curves layer1  relative -z-20  flex flex-col justify-end" >
                <motion.div
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="features relative grid sm:grid-cols-3 px-2 sm:px-6 md:16 lg:px-32  w-full">
                    <motion.div

                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                        // style={{ y: card }}
                        className="card relative col-span-1 w-full h-56  p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Semesters</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                    4
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                        className="card relative col-span-1 w-full h-56 p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Question</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                    49
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
                        className="card relative col-span-1 w-full h-56  p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto  sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Notes</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                    100
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className='p-3  sm:p-16 md:p-28 md:pt-10 sm:pt-10 pt-10  text-[#04152C] '>


                <div className="info  space-y-4 ">
                    <div className="cardType2 flex flex-row justify-between items-center relative">
                        <div className="w-[35rem] h-full top-0 left-0 absolute z-2 bg-blue-500" style={{ clipPath: "polygon(0 18%, 100% 13%, 100% 87%, 0 80%)" }}></div>
                        <div className='h-auto w-[34rem] shadow-xl' style={{ clipPath: "polygon(0 6%, 93% 23%, 99% 79%, 0 89%)" }}>
                            <img src={"src/assets/card1.jpeg"} alt="" className='' />
                        </div>
                        <div className='text-xl  p-14 w-[60%] flex flex-col gap-2 justify-start ml-10'>
                            <p className='text-6xl font-bold leading-normal'>Academic Notes Repository</p>
                            <p className='text-2xl leading-relaxed'>Access a comprehensive and ever-expanding collection of notes, organized meticulously by subject and department.</p>
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center relative">
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start mr-10'>

                            <div className="w-[34rem] absolute pr-4" ></div>

                            <p className='text-6xl font-bold leading-normal'>Previous Exam Question Papers Archive</p>
                            <p className='text-2xl leading-relaxed'>Discover a vast collection of past years' question papers, carefully curated to assist you in your exam preparation. </p>
                        </div>
                        <div className='h-auto w-[34rem] relative ' >
                            <div className="w-full h-full top-0 right-5 absolute z-2 bg-blue-400" style={{ clipPath: "polygon(0 5%, 99% 26%, 95% 71%, 4% 93%)" }}></div>
                            <img src={"src/assets/question.png"} alt="" className='shadow-md' style={{ clipPath: "polygon(0 18%, 100% 13%, 100% 87%, 0 80%)" }} />
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center relative">
                        <div className="w-[35rem] h-full top-0 left-0 absolute z-2 bg-blue-500" style={{ clipPath: "polygon(0 18%, 100% 13%, 100% 87%, 0 80%)" }}></div>
                        <div className="w-[34rem] absolute bg-slate-600" style={{ clipPath: "polygon(4% 28%, 100% 16%, 91% 78%, 0 76%)" }}></div>
                        <div className='h-auto w-[34rem] ' style={{ clipPath: "polygon(0 9%, 99% 26%, 95% 71%, 0 85%)" }}>
                            <img src={"src/assets/assignment.jpeg"} alt="" className='' />
                        </div>
                        <div className='text-xl  p-14 w-[60%] flex flex-col gap-2 ml-10 justify-start'>
                            <p className='text-6xl font-bold leading-normal'>Assignments and Project Ideas Hub</p>
                            <p className='text-2xl leading-relaxed'>Browse through a wide range of sample assignments and innovative project ideas, designed to spark creativity and provide inspiration for your academic work. </p>
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center relative">
                        <div className="w-[34rem] absolute bg-slate-600" style={{ clipPath: "polygon(4% 28%, 100% 16%, 98% 78%, 0 76%)" }}></div>
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start'>
                            <p className='text-6xl font-bold leading-normal'>Comprehensive Study Material Collection</p>
                            <p className='text-2xl leading-relaxed'>Access a carefully curated selection of study materials, including textbooks, scholarly articles, informative videos, and more.</p>
                        </div>
                        <div className='h-auto w-[34rem] relative ' >
                            <div className="w-full h-full top-0 right-5 absolute z-2 bg-blue-400" style={{ clipPath: "polygon(3% 15%, 99% 26%, 95% 71%, 0 87%)" }}></div>
                            <img src={"src/assets/study.png"} alt="" className='shadow-md' style={{ clipPath: "polygon(0 18%, 100% 13%, 100% 87%, 0 80%)" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function MidHeroSection() {
    return (
        <div className="bg-gray-200 font-sans leading-normal tracking-normal">


            <section className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">What to expect</h2>
                        <p className="text-gray-600 mb-12">GIT is a digital haven for students, offering a vast collection of academic resources to help you excel in your studies. Here's what you can expect from our platform:
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-4 mt-12">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                                <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                                <p className="text-gray-600 mb-4">
                                    Centralized repository of academic notes, question papers, and study materials.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
                                <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                                <p className="text-gray-600 mb-4">
                                    Comprehensive collection of assignments, project ideas, and study resources.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">03</div>
                                <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
                                <p className="text-gray-600 mb-4">
                                    User-friendly interface with easy navigation and search functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home