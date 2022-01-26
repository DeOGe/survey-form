import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Proposal() {
let navigate = useNavigate();
  return (
    <div className="pyro h-screen">   
      <div className="text-black max-w-xl p-5 mx-auto bg-white">
        <div className="text-center">
          <div className="my-3 text-2xl">
            <p>You introduced yourself into my life when you went to my graduation celebration UNINVITED and it is only fitting that I be to end it. so Babu I am Breaking up with you! I am breaking up with you because i don't want to be your boyfriend any more.</p><br/>
            <p>I don't like it when you think of fighting with me when your bored. I don't like it when you always say pakasalan mo muna ko and I don't like your name Sarah Monique L. Arit anymore becuase I like the name: <strong>Sarah Monique A. De Ocampo</strong> better!</p><br/>
            <p>You bring out the best in me. Will you change your name to Mrs. Sarah De Ocampo and</p>
          </div>
          
          <h1 className="text-5xl font-extrabold">Marry me??</h1>
        </div>
      </div>
      {/* <img className='mx-auto h-4/6' src="/img/Watch.png" alt="Watch" /> */}
      <div className=" p-5 flex items-center justify-center">
        <button
          className="mx-2 px-10 py-4 text-white bg-gray-500 rounded-md focus:bg-blue-600 focus:outline-none"
          disabled
        >
          NO
        </button>
        <button
          className="mx-2 px-10 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
          onClick={() => navigate('/congratulation')}
        >
              YES
        </button>
      </div>
    </div>
  );
}
