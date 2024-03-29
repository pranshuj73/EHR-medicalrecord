import React from 'react'
import Image from 'next/image'

export default function page() {
  return (<>
    
    <div className="flex justify-center items-center h-screen">
      <div className="container bg-white flex flex-col rounded-3xl h-96 sm:flex-row">
        <div className="left-side flex flex-1 flex-col justify-center items-center rounded-2xl bg-gray-900 p-4">
          <div className="details text-white  text-2xl mt-4">
            <p>Name: John Doe</p>
            <p>Age: 30</p>
            <p>Height: 180 cm</p>
            <p>Weight: 75 kg</p>
          </div>
        </div>
        <div className="right-side flex-1 bg-white rounded-lg p-4 mt-4 sm:mt-0 sm:ml-4">
          <table className="rounded-lg w-full">
            <thead>
              <tr>
                <th className=" text-lg border-b-4">Medical Report</th>
                <th className="text-lg border-b-4">Prescription</th>
                <th className="text-lg border-b-4 ">Doctor Name</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows of data here */}
              <tr>
                <td className="text-lg border-b-4">Report 1</td>
                <td className="text-lg border-b-4">Prescription 1</td>
                <td className="text-lg border-b-4">Dr. Smith</td>
              </tr>
              <tr>
                <td className="text-lg border-b-4">Report 2</td>
                <td className="text-lg border-b-4">Prescription 2</td>
                <td className="text-lg border-b-4">Dr. Johnson</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
