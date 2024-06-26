import { useParams } from "react-router-dom";
import { sem1State } from '../states/Sem1.state';
import { sem2State } from '../states/Sem2.state';
import { sem3State } from '../states/Sem3.state';
import { sem4State } from '../states/Sem4.state';
import { sem5State } from '../states/Sem5.state';
import { sem6State } from '../states/Sem6.state';
import { sem7State } from '../states/Sem7.state';
import { sem8State } from '../states/Sem8.state';
import CardLoading from './CardLoading';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { lazy, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import firebase from "firebase/compat/app";
import { storage } from '../config/firebase.config';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { set } from "firebase/database";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Subject = lazy(() => import("./Subject"));


function SubSemisterArea() {
    const arr = [1, 2, 3, 4]
    const [skeleton, setSkeleton] = useState(false);
    const [subjectsArea, setSubjectsArea] = useState<any>();
    const head = useRef<HTMLDivElement | null>(null);
    const [documentsNotes, setDocumentsNotes] = useState<any>();
    const [referenceBooks, setReferenceBooks] = useState<any>();
    const [recommendedBooks, setRecommendedBooks] = useState<any>();
    const [questionBanks, setQuestionBanks] = useState<any>();
    const [syllabus, setSyllabus] = useState<any>();

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
    const semFolderRef: Record<string, string> = {
        "Sem-I": "Semester 1",
        "Sem-II": "Semester 2",
        "Sem-III": "Semester 3",
        "Sem-IV": "Semester 4",
        "Sem-V": "Semester 5",
        "Sem-VI": "Semester 6",
        "Sem-VII": "Semester 7",
        "Sem-VIII": "Semester 8"
    }
    const { semId, subject } = useParams();
    // console.log(semId, subject);

    useEffect(() => {
        const fetchFiles = async () => {
            setDocumentsNotes(undefined)
            setReferenceBooks(undefined)
            setRecommendedBooks(undefined)
            setQuestionBanks(undefined)
            setSyllabus(undefined)
            setSkeleton(true)
            if (semId && subject) {
                const DocumentsNotesRef = ref(storage, `Department Notes/CSE/${semFolderRef[semId]}/${subject}/Documents Notes/`);
                const QuestionBanksRef = ref(storage, `Department Notes/CSE/${semFolderRef[semId]}/${subject}/Question Banks/`);
                const RecommendedBooksRef = ref(storage, `Department Notes/CSE/${semFolderRef[semId]}/${subject}/Recommended Books/`)
                const ReferenceBooksRef = ref(storage, `Department Notes/CSE/${semFolderRef[semId]}/${subject}/Reference Books/`)
                const SyllabusRef = ref(storage, `Department Notes/CSE/${semFolderRef[semId]}/${subject}/Syllabus/`)
                const res1 = await listAll(DocumentsNotesRef);
                const Docres = await Promise.all(
                    res1.items.map(async item => {
                        const url = await getDownloadURL(item);
                        return { name: item.name, url };
                    })
                );
                const res2 = await listAll(ReferenceBooksRef);
                const Refres = await Promise.all(
                    res2.items.map(async item => {
                        const url = await getDownloadURL(item);
                        return { name: item.name, url };
                    })
                );
                const res3 = await listAll(RecommendedBooksRef);
                const Recres = await Promise.all(
                    res3.items.map(async item => {
                        const url = await getDownloadURL(item);
                        return { name: item.name, url };
                    })
                );
                const res4 = await listAll(SyllabusRef);
                const Syllres = await Promise.all(
                    res4.items.map(async item => {
                        const url = await getDownloadURL(item);
                        return { name: item.name, url };
                    })
                );
                const res5 = await listAll(QuestionBanksRef);
                const Queres = await Promise.all(
                    res5.items.map(async item => {
                        const url = await getDownloadURL(item);
                        return { name: item.name, url };
                    })
                );
                setDocumentsNotes(Docres);
                setReferenceBooks(Refres);
                setRecommendedBooks(Recres);
                setQuestionBanks(Queres);
                setSyllabus(Syllres);
            }
            setSkeleton(false)
        }
        try {

            fetchFiles();
        } catch (error) {
            console.log(error);

        }
        // console.log(documentsNotes);

    }, [subject])
    useEffect(() => {
        // let list = document.querySelector('.data');
        // eleContext.target.setAttribute("className", ".active")
        if (semId) setSubjectsArea(semDatRef[semId]);
    }, [semId])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 gap-4 p-4 ">
            {skeleton ? <CardLoading /> : ""}
            {skeleton ? <CardLoading /> : ""}
            {skeleton ? <CardLoading /> : ""}
            {skeleton ? <CardLoading /> : ""}
            {
                subject &&
                    (documentsNotes == null || documentsNotes == undefined) &&
                    (referenceBooks == null || referenceBooks == undefined) &&
                    (recommendedBooks == null || recommendedBooks == undefined) &&
                    (questionBanks == null || questionBanks == undefined) &&
                    (syllabus == null || syllabus == undefined) &&
                    !skeleton ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-slate-600 '>Select something</div> : ""
            }
            {
                subject && referenceBooks ? referenceBooks.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
                            <div className="title text-2xl font-bold">{item.name}</div>
                            <div className="h-1 w-full bg-slate-400 "></div>
                            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                                <div className="text-sm">Reference Book</div>
                                <div className="text-sm">Total Books: {referenceBooks.length}</div>
                                <div className="text-sm">Available Notes: {referenceBooks.length}</div>
                            </div>
                            <a href={item.url}></a>
                            <div className="content text-lg cursor-pointer text-center">Download Doc</div>
                        </div>
                    )
                }) : ""
            }
            {
                subject && documentsNotes ? documentsNotes.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
                            <div className="title text-2xl font-bold">{item.name}</div>
                            <div className="h-1 w-full bg-slate-400 "></div>
                            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                                <div className="text-sm">Document Notes</div>
                                <div className="text-sm">Total Docs: {documentsNotes.length}</div>
                                <div className="text-sm">Available Notes: {documentsNotes.length}</div>
                            </div>
                            <a href={item.url} target="_blank" >

                                <div className="content text-lg cursor-pointer text-center">Download Doc</div>
                            </a>
                        </div>
                    )
                }) : ""
            }
            {
                subject && recommendedBooks ? recommendedBooks.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
                            <div className="title text-2xl font-bold">{item}</div>
                            <div className="h-1 w-full bg-slate-400 "></div>
                            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                            <div className="text-sm">Recommended Books</div>
                            
                                <div className="text-sm">Total Docs: {documentsNotes.length}</div>
                                <div className="text-sm">Available Notes: {documentsNotes.length}</div>
                            </div>
                            <div className="content text-lg cursor-pointer text-center">Download Doc</div>
                        </div>
                    )
                }) : ""
            }

            {
                subject && questionBanks ? questionBanks.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
                            <div className="title text-2xl font-bold">{item}</div>
                            <div className="h-1 w-full bg-slate-400 "></div>
                            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                            <div className="text-sm">Question Bank</div>
                                <div className="text-sm">Total Docs: {documentsNotes.length}</div>
                                <div className="text-sm">Available Notes: {documentsNotes.length}</div>
                            </div>
                            <div className="content text-lg cursor-pointer text-center">Download Doc</div>
                        </div>
                    )
                }) : ""
            }

            {
                subject && syllabus && syllabus.map((item: any, index: number) => {
                    return (
                        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
                            <div className="title text-2xl font-bold">{item}</div>
                            <div className="h-1 w-full bg-slate-400 "></div>
                            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                            <div className="text-sm">Syllabus</div>
                                <div className="text-sm">Total Docs: {documentsNotes.length}</div>
                                <div className="text-sm">Available Notes: {documentsNotes.length}</div>
                            </div>
                            <div className="content text-lg cursor-pointer text-center">Download Doc</div>
                        </div>
                    )
                })
            }
            {!subject
                ? subjectsArea
                    ? subjectsArea.length > 0
                        ? subjectsArea.map((subject: Subject, index: number) => {
                            if (typeof subject === 'object' && subject !== null) {
                                return (
                                    <Suspense key={index} fallback={<CardLoading />}>
                                        <Subject {...subject} semId={semId} />
                                    </Suspense>
                                )
                            }
                        })
                        : <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2  text-3xl text-slate-600 w-[100%]'>No subjects</div>
                    : <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl  text-slate-600 '>Select something</div>
                : ""
            }
        </div>
    )
}


export default SubSemisterArea;