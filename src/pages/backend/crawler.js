const puppeteer = require('puppeteer');

const url = 'https://www.wikipedia.org/';

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const { port } = new URL(browser.wsEndpoint());
  
  const { default: lighthouse } = await import('lighthouse');

  const { lhr } = await lighthouse(url, {
    port,
    output: 'json',
    logLevel: 'info',
  });

  console.log(`Performance Score: ${lhr.categories.performance.score * 100}`);
  console.log(`LCP: ${lhr.audits['largest-contentful-paint'].displayValue}`);
  console.log(`CLS: ${lhr.audits['cumulative-layout-shift'].displayValue}`);
  
  // Please note that lighthouse does not measure FID as it requires real user interaction, 
  // instead it provides a metric called Total Blocking Time (TBT) which correlates with FID
  console.log(`TBT: ${lhr.audits['total-blocking-time'].displayValue}`);
  
  await browser.close();
})();