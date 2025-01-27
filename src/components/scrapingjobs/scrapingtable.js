import React, { useState } from "react";
import Papa from "papaparse";
import scrapingjson from "./scraping.json";

export default function Scrapingtable() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [isDateRequired, setIsDateRequired] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const invoices = scrapingjson;

  const calculateTotals = (counts) => {
    return counts.reduce(
      (totals, count) => {
        totals.totalCount += count.count;
        totals.totalMatchedCount += count.matchedcount;
        totals.totalNotMatchedCount += count.notmatchedcount;
        return totals;
      },
      { totalCount: 0, totalMatchedCount: 0, totalNotMatchedCount: 0 }
    );
  };

  const handleCheck = () => {
    if (!startDate || !endDate) {
      setIsDateRequired(true);
      setFilteredInvoices([]);
      setIsFiltered(false);
      return;
    }

    const filtered = invoices.map(invoice => ({
      ...invoice,
      counts: invoice.counts.filter(
        count => count.date >= startDate && count.date <= endDate
      )
    }));

    setFilteredInvoices(filtered);
    setIsDateRequired(false);
    setIsFiltered(true);
  };

  const exportCSV = () => {
    if (!startDate || !endDate) {
      setIsDateRequired(true);
      return;
    }
  
    const csvData = filteredInvoices.map((invoice) => {
      const totals = calculateTotals(invoice.counts);
      return {
        "SR No": invoice.id,
        "Name": invoice.name,
        "Total Count": totals.totalCount,
        "Matched Count": totals.totalMatchedCount,
        "Not Matched Count": totals.totalNotMatchedCount,
      };
    });
  
    if (csvData.length === 0) {
      alert("No data available for the selected date range.");
      return;
    }
  
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const filename = `${startDate} - ${endDate} scrapingjobs.csv`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg p-4">

        <h3 className="text-lg font-medium text-black mb-4">Scraping Jobs</h3>
        
        {/* Date inputs container */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 flex-1">
            <label className="text-base text-black whitespace-nowrap">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setIsDateRequired(false);
              }}
              className={`w-full lg:w-96 px-3 py-2 border rounded-lg ${
                isDateRequired && !startDate ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 flex-1">
            <label className="text-base text-black whitespace-nowrap">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setIsDateRequired(false);
              }}
              className={`w-full lg:w-96 px-3 py-2 border rounded-lg ${
                isDateRequired && !endDate ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
          </div>
        </div>

        {/* Error message */}
        {isDateRequired && (!startDate || !endDate) && (
          <p className="text-red-500 mb-4">Please select both start and end dates</p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button 
            onClick={handleCheck}
            className="px-8 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors text-base"
          >
            Check
          </button>
          <button
            onClick={exportCSV}
            className="px-8 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors text-base"
          >
            Export
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">SR No</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Total Count</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Matched Count</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Not Matched Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {!isFiltered && invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">{invoice.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">{invoice.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">0</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">0</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">0</td>
                  </tr>
                ))}
                {isFiltered && filteredInvoices.map((invoice) => {
                  const totals = calculateTotals(invoice.counts);
                  return (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 text-center">{invoice.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-center">{invoice.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-center">{totals.totalCount}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-center">{totals.totalMatchedCount}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-center">{totals.totalNotMatchedCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
  );
}