import React, { useEffect } from 'react'
import { db, app } from '../config/firebase.config';
import { onSnapshot, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { collection } from 'firebase/firestore';

interface Department {
  id: string;
}
export default function UploadNotes() {
  const [notes, setNotes] = useState<{ id: string }[]>([]);
  const [departmentNames, setDepartmentNames] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentRef = collection(db, 'Department Notes');
        const querySnapshot = await getDocs(departmentRef);
        const departmentNamesArray: Department[] = [];
        querySnapshot.forEach(doc => {
          departmentNamesArray.push({ id: doc.id });

          console.log(doc.id, ' => ', doc.data());
          
        });
        setDepartmentNames(departmentNamesArray);
        // console.log(querySnapshot.docs)
      } catch (error) {
        console.error('Error fetching department names: ', error);
      }
    };

    fetchDepartments();
  }, []);


  return (
    <div>
      <h2>Department Names:</h2>
      <ul>
        {departmentNames.map(department => (
          <li key={department.id}>{department.id}</li>
        ))}
      </ul>
    </div>
  )
}
