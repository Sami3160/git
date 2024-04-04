import React, { useEffect } from 'react'
import { db } from '../config/firebase.config';
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
export default function UploadNotes() {
  useEffect(() => {
    onSnapshot(collection(db, 'Department Notes'), (snapshot) => {
      console.log(snapshot.docs)
    })
  })
  return (
    <div className='w-full h-[100%] bg-yellow-300'>UploadNotes</div>
  )
}
