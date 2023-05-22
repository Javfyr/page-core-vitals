import PageCoreVitals from '../components/CoreVitalsReport';
import '../styles/globals.css';
import { useState } from 'react';

const initialReportData = [
  {
    id: 1,
    name: 'First Contentful Paint (FCP)',
    description: 'The time it takes for a page to start displaying content',
    score: 2.1,
    maxScore: 3,
  },
  {
    id: 2,
    name: 'Performance',
    description: 'The overall performance score of the page',
    score: 85,
    maxScore: 100,
  },
  // other core web vitals data here...
];

// eslint-disable-next-line no-unused-vars
export default function App({ Component, pageProps }) {
  const [reportData, setReportData] = useState(initialReportData);
  const [isLoading, setIsLoading] = useState(false);

  const handleRescan = async () => {
    setIsLoading(true);

    // Simulate a delay to represent the time taken to scan the website and generate a new report.
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simulate new report data being generated. In a real application, this would be replaced
    // with an API request that returns the new report data.
    const newReportData = [
      // new core web vitals data
    ];

    setReportData(newReportData);
    setIsLoading(false);
  };

  return (
    <div className='dark'>
      <PageCoreVitals
        reportData={reportData}
        onRescan={handleRescan}
        isLoading={isLoading}
      />
    </div>
  );
}