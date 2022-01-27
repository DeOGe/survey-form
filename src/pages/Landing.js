import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  let navigate = useNavigate();
  const [data, setData] = useState({
      fname: "",
      mname: "",
      lname: ""
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.fname.toLowerCase() === 'sarah' ||
      data.fname.toLowerCase() === 'sarah monique' &&
      data.mname.toLowerCase() === 'lagunay' &&
      data.lname.toLowerCase() === 'arit'
    ) {
      navigate('/confirm');
    } else {
      clearData();
      alert("Thank you for participating in this survey, Sadly you have not been chosen to proceed.")
    }
  }
  
  const clearData = () => {
    setData({fname: "", mname: "", lname: ""});
  }
 
  return (
    <div className="container mx-auto">
      <div className="text-black max-w-xl p-5 mx-auto bg-white rounded-md shadow-sm">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700">Tell us your name</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="fname"
                required
                onChange={handleChange}
                value={data.fname}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">Middle Name</label>
              <input
                type="text"
                name="mname"
                required
                onChange={handleChange}
                value={data.mname}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lname"
                required
                onChange={handleChange}
                value={data.lname}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full px-2 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
