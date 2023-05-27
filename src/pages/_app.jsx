import PageCoreVitals from '../components/CoreVitalsReport';
import '../styles/globals.css';
import { useEffect, useState } from 'react';

const initialReportData = [
  {
    id: 1,
    route: '/route1',
    categories: {
      'Performance': {score: 85, lcp: 2.1, cls: 0.01, fid: 75},
      'Accessibility': {score: 90, ARIA: 2.0, "Best Practices": 0.01},
      'Best Practices': {score: 95, lcp: 2.2, cls: 0.02, fid: 78},
    }
  },
  // more routes...
];

// eslint-disable-next-line no-unused-vars
export default function App({ Component, pageProps }) {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setReportData(initialReportData);
  }, []);

  const handleRescan = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
