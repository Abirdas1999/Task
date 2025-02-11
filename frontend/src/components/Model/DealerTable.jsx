import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const DEALER_DATA = [
  {
    Dealer: "NM22",
    Exchange: "NSEFO",
    Currency: "INR",
    GrossPL: -679410,
    Exposure: -163546450.75,
    ExpMargin: 506993.98,
    SpanMargin: 30973944.5,
    TotMargin: 31480938.48,
  },
  {
    Dealer: "NM06",
    Exchange: "NSEFO",
    Currency: "INR",
    GrossPL: -1171848.75,
    Exposure: 216855000,
    ExpMargin: 672250.5,
    SpanMargin: 28138804.25,
    TotMargin: 28811054.75,
  },
  {
    Dealer: "NM45",
    Exchange: "NSEFO",
    Currency: "INR",
    GrossPL: -148.75,
    Exposure: 0,
    ExpMargin: 672250.5,
    SpanMargin: 28145604.25,
    TotMargin: 28811054.75,
  },
];

const DealerTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDealers, setFilteredDealers] = useState(DEALER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = DEALER_DATA.filter(
      (dealer) =>
        dealer.Dealer.toLowerCase().includes(term) ||
        dealer.Exchange.toLowerCase().includes(term) ||
        dealer.Currency.toLowerCase().includes(term)
    );

    setFilteredDealers(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Dealer Financial Data</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dealer, Exchange, or Currency..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Dealer", "Exchange", "Currency", "GrossPL", "Exposure", "ExpMargin", "SpanMargin", "TotMargin"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredDealers.map((dealer, index) => (
              <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{dealer.Dealer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.Exchange}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.Currency}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.GrossPL.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.Exposure.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.ExpMargin.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.SpanMargin.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{dealer.TotMargin.toLocaleString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DealerTable;
