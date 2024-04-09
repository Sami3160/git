import React, { FormEvent, MouseEventHandler, useRef, useState } from 'react';
import { sem3State } from '../states/Sem3.state';
import { sem4State } from '../states/Sem4.state';
import { sem5State } from '../states/Sem5.state';
import { sem6State } from '../states/Sem6.state';
import { sem7State } from '../states/Sem7.state';
import { sem8State } from '../states/Sem8.state';
import { storage } from '../config/firebase.config';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useRecoilState } from 'recoil';
function UploadFile() {
    const [file, setFile] = useState<File | null>();
    const [subjects, setSubjects] = useState<typeof sem3 | Object[] |null>([{name:"No Semester Selected"}]);
    const [invalid, setInvalid] = useState<boolean>(false);
    const sem = useRef<HTMLSelectElement>(null);
    const dept = useRef<HTMLSelectElement>(null);
    const type = useRef<HTMLSelectElement>(null);

    const sem3 = useRecoilState(sem3State);
    const sem4 = useRecoilState(sem4State);
    const sem5 = useRecoilState(sem5State);
    const sem6 = useRecoilState(sem6State);
    const sem7 = useRecoilState(sem7State);
    const sem8 = useRecoilState(sem8State);


    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const semName = sem.current?.value
        const deptName = dept.current?.value
        const typeName = type.current?.value
        if (semName === "default" || deptName === "default" || typeName === "default") {
            setTimeout(() => {
                setInvalid(false);
            }, 3000);
            setInvalid(true);
            return;
        }
        if (file) {
            const storageRef = ref(storage, `Department Notes/${deptName}/${semName}/${typeName}/` + file.name);
            uploadBytes(storageRef, file).then(() => {
                console.log('File uploaded successfully');
            });
        }
    }
    return (
        <div className='relative'>
            <div className="title w-full my-3 mt-24">
                <p className='mx-auto w-fit text-3xl p-3'>
                    Upload Notes from here
                </p>
            </div>
            <div className="main m-14 mt-16 bg-blue-50">
                {invalid ? <p className='text-red-500 p-2'>Please select department, semester and category correctly.</p> : null}
                <div className="opt grid grid-cols-3 p-2 space-x-2 space-y-2 items-end">

                    <div className="dept col-span-1  bg-blue-100 h-fit " >
                        <select name="department" id="" className='bg-blue-100 p-4 cursor-pointer w-full' ref={dept}>
                            <option value="default" >Select Department</option>
                            <option value="CSE">CSE</option>
                            <option value="E & TC">E & TC</option>
                            <option value="AI ML">AI/ML</option>
                        </select>
                    </div>

                    <div className="semester col-span-1  bg-blue-100" >

                        <select name="semester" id="" className='bg-blue-100 p-4 cursor-pointer w-full' ref={sem}
                         onChange={(e:any)=>{

                            
                            if (e.target?.value === "Semester 3") {
                                setSubjects(sem3);
                            } else if (e.target?.value === "Semester 4") {
                                setSubjects(sem4);
                            } else if (e.target?.value === "Semester 5") {
                                setSubjects(sem5);
                            } else if (e.target?.value === "Semester 6") {
                                setSubjects(sem6);
                            } else if (e.target?.value === "Semester 7") {
                                setSubjects(sem7);
                            } else if (e.target?.value === "Semester 8") {
                                setSubjects(sem8);
                            } else {
                                setSubjects([{ name: "No Semester Selected" }]);
                            }
                        }}
                        >
                            <option value="default">Select Semester</option>
                            <option value="Semester 3">Semester 3</option>
                            <option value="Semester 4">Semester 4</option>
                            <option value="Semester 5">Semester 5</option>
                            <option value="Semester 6">Semester 6</option>
                            <option value="Semester 7">Semester 7</option>
                            <option value="Semester 8">Semester 8</option>
                        </select>
                    </div>
                    <div className="Subject col-span-1  bg-blue-100" >
                        <select name="type" id="" className='bg-blue-100 p-4 cursor-pointer w-full' ref={type}>
                            {
                                subjects?.map((ele:any,index:number)=>{
                                    return <option key={index} value={ele.name}>{ele.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="types col-span-1  bg-blue-100" >

                        <select name="type" id="" className='bg-blue-100 p-4 cursor-pointer w-full' ref={type}>
                            <option value="default" >Select Category</option>
                            <option value="Documents Notes">Documents Notes</option>
                            <option value="Question Banks">Question Banks</option>
                            <option value="Recommended Books">Recommended Books</option>
                            <option value="Reference Books">Reference Books</option>
                            <option value="Syllabus">Syllabus</option>
                        </select>
                    </div>
                    
                </div>

                <div className="controls m-2 flex items-end space-x-2">
                    <div className="grid w-full max-w-xs items-center gap-1.5 shadow-lg">
                        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">File</label>
                        <input type="file" onChange={handleFileChange} className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                    </div>

                    <button onClick={handleUpload} className='bg-green-100 p-2 rounded-md px-5 h-fit shadow-lg'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default UploadFile;
