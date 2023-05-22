import React from 'react';

const CoreVitalsReport = ({ reportData, onRescan, isLoading }) => (
  <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-gray-800 text-white'>
    <h1 className='text-2xl font-semibold'>Core Web Vitals Report</h1>

    <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-3'>
      {reportData.map((data) => (
        <div
          key={data.id}
          className='bg-gray-700 border border-gray-600 p-4 rounded-md'
        >
          <h2 className='text-lg font-medium'>{data.name}</h2>
          <p className='mt-1'>{data.description}</p>
          <div className='mt-2 flex justify-center text-2xl'>
            <span className='font-bold text-white'>{data.score}</span>
            <span className='text-gray-400'>/{data.maxScore}</span>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={onRescan}
      disabled={isLoading}
      className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        isLoading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {isLoading ? 'Scanning...' : 'Rescan and Generate New Report'}
    </button>
  </div>
);

export default CoreVitalsReport;
