import React, { useState } from 'react';
import ScoreDoughnut from './ScoreDoughnut';

const CoreVitalsReport = ({ reportData, onRescan, isLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState('Overview');
  const categories = [
    'Overview',
    'Performance',
    'Accessibility',
    'Best Practices',
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-gray-800 text-white h-full'>
      <h1 className='pt-4 text-2xl font-semibold'>Core Web Vitals Report</h1>

      <div className='mt-4 grid grid-cols-5 gap-4 h-full'>
        <div className='col-span-1 bg-gray-700 rounded-md p-0'>
          <div className='p-4'>
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full text-left py-2 px-4 rounded ${
                  selectedCategory === category ? 'bg-gray-600' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='col-span-4 bg-gray-700 rounded-md p-0'>
          <div className='p-4'>
            <h2 className='text-lg font-medium'>{selectedCategory} Report</h2>
            <table className='w-full mt-4 table-fixed'>
              <thead>
                <tr>
                  <th className='w-1/5 px-4 text-left'>Route Name</th>
                  <th className='w-1/5 px-4 text-left'>Score</th>
                  <th className='w-1/5 px-4 text-left'>LCP</th>
                  <th className='w-1/5 px-4 text-left'>CLS</th>
                  <th className='w-1/5 px-4 text-left'>FID</th>
                </tr>
              </thead>
              <tbody>
                {reportData
                  .filter((data) => data.category === selectedCategory)
                  .map((data, index) => (
                    <tr
                      key={data.id}
                      className={`${index % 2 === 0 ? 'bg-gray-600' : ''}`}
                    >
                      <td className='px-4 text-left'>{data.name}</td>
                      <td className='px-4 text-left flex items-center'>
                        <div>{data.score}</div>
                        <div className='ml-4'>
                          <ScoreDoughnut score={data.score} />
                        </div>
                      </td>
                      <td className='px-4 text-left'>{data.lcp}</td>
                      <td className='px-4 text-left'>{data.cls}</td>
                      <td className='px-4 text-left'>{data.fid}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button
        onClick={onRescan}
        disabled={isLoading}
        className={`mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          isLoading ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {isLoading ? 'Scanning...' : 'Rescan and Generate New Report'}
      </button>
    </div>
  );
};

export default CoreVitalsReport;
