import React, { useState } from 'react'
import Sarah from '../Sarah.png';
import { useNavigate } from 'react-router-dom';

export default function Confirm() {
const [showImage, setshowImage] = useState(true);
let navigate = useNavigate();

  return (
    <div className=" flex flex-col h-screen ">
      <div className={`absolute bg-opacity-95 w-screen h-screen`} > 
        <img className={`object-center h-screen w-screen ${ showImage ? "" : "hidden"}`} src={Sarah} alt="Future Wife" />
      </div>
      <div className="z-10 mx-auto">       
        <div className="text-black max-w-xl p-5 mx-auto bg-white opacity-80">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700">Are you sure your name is:</h1>
            <h1 className="text-5xl font-extrabold">Sarah Monique Arit?</h1>
          </div>
        </div>

        <div className=" p-10 flex items-center justify-center">
          <button className="mx-2 px-10 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
          >
            NO
          </button>
          <button 
            className="mx-2 px-10 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
            onClick={() => navigate('/proposal')}
          >
              YES
            
          </button>
        </div>
      </div>
    </div>
  )
}
