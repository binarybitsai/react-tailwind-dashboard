import React from 'react';
import Scrapingtable from '../components/scrapingjobs/scrapingtable';
import Footer from '../components/footer';

export default function ScrapingJobs() {
  return (
    <>
    <div className="flex">
    <div className="flex-1 p-8">
      <div className="grid grid-cols-12 gap-6 pt-5">
        <div className="col-span-12">
          <Scrapingtable />
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}
