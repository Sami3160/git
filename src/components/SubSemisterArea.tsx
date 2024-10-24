import { useParams } from "react-router-dom";
import {  dynamicSem2State } from '../states/Sem2.state';
import { dynamicSem3State} from '../states/Sem3.state';
import {  dynamicSem4State } from '../states/Sem4.state';
import {  dynamicSem5State} from '../states/Sem5.state';
import {  dynamicSem6State} from '../states/Sem6.state';
import {  dynamicSem7State} from '../states/Sem7.state';
import { dynamicSem8State} from '../states/Sem8.state';
import CardLoading from './CardLoading';
import { Suspense, useEffect } from 'react';
import { lazy,  useState } from "react";
import { useRecoilValue } from "recoil";
import { storage } from '../config/firebase.config';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import LoginForm from "../pages/LoginForm";

const Subject = lazy(() => import("./Subject"));


function SubSemisterArea() {
    const [skeleton, setSkeleton] = useState(false);
    const [subjectsArea, setSubjectsArea] = useState<any>();
    const [documentsNotes, setDocumentsNotes] = useState<any>();
    const [referenceBooks, setReferenceBooks] = useState<any>();
    const [recommendedBooks, setRecommendedBooks] = useState<any>();
    const [questionBanks, setQuestionBanks] = useState<any>();
    const [syllabus, setSyllabus] = useState<any>();
    const queryParams=new URLSearchParams(location.search)
    let sub = queryParams.get('sub');
    if(!sub)sub='cse';

    const sem1 = useRecoilValue(dynamicSem2State(sub));
    const sem2 = useRecoilValue(dynamicSem2State(sub));
    const sem3 = useRecoilValue(dynamicSem3State(sub));
    const sem4 = useRecoilValue(dynamicSem4State(sub));
    const sem5 = useRecoilValue(dynamicSem5State(sub));
    const sem6 = useRecoilValue(dynamicSem6State(sub));
    const sem7 = useRecoilValue(dynamicSem7State(sub));
    const sem8 = useRecoilValue(dynamicSem8State(sub));
    // console.log(sem5);
    // console.log(sem2);
    // console.log(sem3);
    interface Subject {
        name: string;
        totalC: number;
        questionC: number;
        notesC: number;
        onlineRefC: number;
    }
    const semDatRef: Record<string, typeof sem3> = {
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

    console.log(sub)
    const submap={
        "cse":"CSE",
        "entc":"E & TC",
        "mech":"Mech",
        "civil":"Civil"
    }

    
    useEffect(() => {
        const fetchFiles = async () => {
            setDocumentsNotes(undefined)
            setReferenceBooks(undefined)
            setRecommendedBooks(undefined)
            setQuestionBanks(undefined)
            setSyllabus(undefined)
            setSkeleton(true)
            console.log("fetching files", semId, subject);
            
            if (semId && subject) {
                const DocumentsNotesRef = ref(storage, `Department Notes/${submap[sub]}/${semFolderRef[semId]}/${subject}/Documents Notes/`);
                const QuestionBanksRef = ref(storage, `Department Notes/${submap[sub]}/${semFolderRef[semId]}/${subject}/Question Banks/`);
                const RecommendedBooksRef = ref(storage, `Department Notes/${submap[sub]}/${semFolderRef[semId]}/${subject}/Recommended Books/`)
                const ReferenceBooksRef = ref(storage, `Department Notes/${submap[sub]}/${semFolderRef[semId]}/${subject}/Reference Books/`)
                const SyllabusRef = ref(storage, `Department Notes/${submap[sub]}/${semFolderRef[semId]}/${subject}/Syllabus/`)
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