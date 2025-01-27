import React from "react";
import Welcomecard from "../components/dashboard/welcomecard";
import Contactcard from "../components/dashboard/contactcard";
import Totalcars from "../components/dashboard/totalcars";
import Scrapecar from "../components/dashboard/scrapecar";
import Newcar from "../components/dashboard/newcar";
import Carinvoice from "../components/dashboard/carinvoice";
import Relatedcar from "../components/dashboard/relatedcar";
import Totalcountries from "../components/dashboard/totalcountries";
import Carfounder from "../components/dashboard/carfounder";
import Circularprogressnewcar from "../components/dashboard/circularprogressnewcar";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
    <div className="flex">
      <div className="flex-1 p-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <Welcomecard />
          </div>
          <div className="col-span-12 md:col-span-5">
            <Contactcard />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <Totalcars />
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 md:col-span-4">
            <Scrapecar />
          </div>
          <div className="col-span-12 md:col-span-8">
            <Newcar />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 md:col-span-8">
            <Carinvoice />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Relatedcar />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 md:col-span-4">
            <Totalcountries />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Carfounder />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Circularprogressnewcar />
          </div>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  );
}
