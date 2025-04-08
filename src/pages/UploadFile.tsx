import React, { useEffect, useRef, useState } from "react";
import { sem3State } from "../states/Sem3.state";
import { sem4State } from "../states/Sem4.state";
import { sem5State } from "../states/Sem5.state";
import { sem6State } from "../states/Sem6.state";
import { sem7State } from "../states/Sem7.state";
import { sem8State } from "../states/Sem8.state";
// import { dynamicSem2State } from "../states/Sem2.state";
// import { dynamicSem3State } from "../states/Sem3.state";
// import { dynamicSem4State } from "../states/Sem4.state";
// import { dynamicSem5State } from "../states/Sem5.state";
// import { dynamicSem6State } from "../states/Sem6.state";
// import { dynamicSem7State } from "../states/Sem7.state";
// import { dynamicSem8State } from "../states/Sem8.state";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes } from "firebase/storage";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
// interface Subject {
//     name: string;
//     totalC: number;
//     questionC: number;
//     notesC: number;
//     onlineRefC: number;
// }
function UploadFile() {
  const btn = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { user, loading } = useUser();
  let sub = "cse";

  const [file, setFile] = useState<File | null>();
  const [subjects, setSubjects] = useState<string[]>(["No Semester Selected"]);
  const [invalid, setInvalid] = useState<boolean>(false);
  const sem = useRef<HTMLSelectElement>(null);
  const dept = useRef<HTMLSelectElement>(null);
  const type = useRef<HTMLSelectElement>(null);
  const subname = useRef<HTMLSelectElement>(null);

  const sem3 = useRecoilState<any>(sem3State);
  const sem4 = useRecoilState<any>(sem4State);
  const sem5 = useRecoilState<any>(sem5State);
  const sem6 = useRecoilState<any>(sem6State);
  const sem7 = useRecoilState<any>(sem7State);
  const sem8 = useRecoilState<any>(sem8State);
  // const sem3 = useRecoilValue(dynamicSem3State(sub));
  // const sem4 = useRecoilValue(dynamicSem4State(sub));
  // const sem5 = useRecoilValue(dynamicSem5State(sub));
  // const sem6 = useRecoilValue(dynamicSem6State(sub));
  // const sem7 = useRecoilValue(dynamicSem7State(sub));
  // const sem8 = useRecoilValue(dynamicSem8State(sub));
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);
  if (loading) return <p>Loading...</p>;

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const deptMap: any = {
    CSE: "cse",
    "E & TC": "entc",
    CIVIL: "civil",
    MECHANICAL: "mech",
  };

  const handleUpload = () => {
    btn.current?.setAttribute("disabled", "true");
    btn.current?.classList.add("bg-gray-200");
    btn.current?.classList.add("cursor-not-allowed");

    const semName = sem.current?.value;
    const deptName = dept.current?.value;
    const typeName = type.current?.value;
    const subName = subname.current?.value;
    if (
      semName === "default" ||
      deptName === "default" ||
      typeName === "default"
    ) {
      setTimeout(() => {
        setInvalid(false);
      }, 3000);
      setInvalid(true);
      return;
    }
    if (file) {
      const storageRef = ref(
        storage,
        `Department Notes/${deptName}/${semName}/${subName}/${typeName}/` +
          file.name
      );
      uploadBytes(storageRef, file)
        .then(() => {
          console.log("File uploaded successfully", file.name);
          btn.current?.classList.remove("bg-gray-200");
          btn.current?.classList.remove("cursor-not-allowed");
          btn.current?.removeAttribute("disabled");
          alert("File uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
          btn.current?.classList.remove("bg-gray-200");
          btn.current?.classList.remove("cursor-not-allowed");
          btn.current?.removeAttribute("disabled");
          alert(err.message)
        });
    }
  };
  if (user?.role == "admin") {
    return (
      <div className="relative">
        <div className="title w-full my-3 mt-24">
          <p className="mx-auto w-fit text-3xl p-3">Upload Notes from here</p>
        </div>
        <div className="main m-14 mt-16 bg-blue-50">
          {invalid ? (
            <p className="text-red-500 p-2">
              Please select department, semester and category correctly.
            </p>
          ) : null}
          <div className="opt grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 space-x-2 space-y-10 sm:space-y-2 items-end">
            <div className="dept col-span-1  bg-blue-100 h-fit ">
              <select
                name="department"
                id=""
                className="bg-blue-100 p-4 cursor-pointer w-full"
                ref={dept}
                onChange={async (e: React.ChangeEvent<HTMLSelectElement>) => {
                  const semVal: string | undefined | null = sem.current?.value;
                  if (semVal === "default") return;
                  
                  if (e.target?.value === "default") {
                    setSubjects(["No Semester Selected"]);
                    return
                  }
                  if (semVal === "Semester 3") {
                    setSubjects(sem3[0][deptMap[e.target?.value ?? ""]]);
                    console.log(sem3[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 4") {
                    setSubjects(sem4[0][deptMap[e.target?.value ?? ""]]);
                    console.log(sem4[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 5") {
                    setSubjects(sem5[0][deptMap[e.target?.value ?? ""]]);
                    console.log(sem5[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 6") {
                    setSubjects(sem6[0][deptMap[e.target?.value ?? ""]]);
                    console.log(sem6[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 7") {
                    setSubjects(sem7[0][deptMap[e.target?.value ?? ""]]);
                    console.log(sem7[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 8") {
                    console.log(sem8[0][deptMap[e.target?.value ?? ""]]);
                    setSubjects(sem8[0][deptMap[e.target?.value ?? ""]]);
                  } else {
                    setSubjects(["No Semester Selected" ]);
                  }
                }}
              >
                <option value="default">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="E & TC">E & TC</option>
                <option value="CIVIL">Civil</option>
                <option value="MECHANICAL">Mechanical</option>
              </select>
            </div>

            <div className="semester col-span-1  bg-blue-100 ">
              <select
                name="semester"
                id=""
                className="bg-blue-100 p-4 cursor-pointer w-full"
                ref={sem}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  // console.log(subjects);
                  const deptVal: string | undefined | null =
                    dept.current?.value;
                  if (deptVal === "default") return;
                  if (e.target?.value === "default") {
                    setSubjects(["No Semester Selected"]);
                  }
                  if (e.target?.value === "Semester 3") {
                    setSubjects(sem3[0][deptMap[deptVal ?? ""]]);
                    console.log(sem3[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 4") {
                    setSubjects(sem4[0][deptMap[deptVal ?? ""]]);
                    console.log(sem4[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 5") {
                    setSubjects(sem5[0][deptMap[deptVal ?? ""]]);
                    console.log(sem5[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 6") {
                    setSubjects(sem6[0][deptMap[deptVal ?? ""]]);
                    console.log(sem6[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 7") {
                    setSubjects(sem7[0][deptMap[deptVal ?? ""]]);
                    console.log(sem7[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 8") {
                    console.log(sem8[0][deptMap[deptVal ?? ""]]);
                    setSubjects(sem8[0][deptMap[deptVal ?? ""]]);
                  } else {
                    setSubjects(["No Semester Selected" ]);
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
            <div className="Subject col-span-1  bg-blue-100">
              <select
                name="type"
                id=""
                className="bg-blue-100 p-4 cursor-pointer w-full"
                ref={subname}
              >
                {subjects.map((subject: any, index: number) => {
                  return (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="types col-span-1  bg-blue-100">
              <select
                name="type"
                id=""
                className="bg-blue-100 p-4 cursor-pointer w-full"
                ref={type}
              >
                <option value="default">Select Category</option>
                <option value="Documents Notes">Documents Notes</option>
                <option value="Question Banks">Question Banks</option>
                <option value="Recommended Books">Recommended Books</option>
                <option value="Reference Books">Reference Books</option>
                <option value="Syllabus">Syllabus</option>
              </select>
            </div>
          </div>

          <div className="controls m-2 flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-x-8 pb-8">
            <div className="grid w-full max-w-xs items-center gap-1.5 shadow-lg">
              <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              />
            </div>

            <button
              onClick={handleUpload}
              ref={btn}
              className="bg-green-100 p-2 rounded-md px-5 h-fit shadow-lg"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Access not granted</p>
      </div>
    );
  }
}

export default UploadFile;
