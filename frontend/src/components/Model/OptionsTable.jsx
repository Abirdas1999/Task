import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const OPTIONS_DATA = [
  {
    Dealer: "NM00",
    BrokerID: "CBJ1350",
    Exchange: "NSEFO",
    Symbol: "NIFTY",
    Expiry: "13Feb2025",
    Strike: 23700,
    OptionType: "CE",
    OpenQuantity: 0,
    OpenPrice: 0,
    LTP: 42.05,
    MtM: 100.5,
    MtM_INR: 200.5,
    Exp: -1800,
    Exp_INR: -18300,
  },
  {
    Dealer: "NM00",
    BrokerID: "CBJ1350",
    Exchange: "NSEFO",
    Symbol: "NIFTY",
    Expiry: "13Feb2025",
    Strike: 23700,
    OptionType: "PE",
    OpenQuantity: 0,
    OpenPrice: 0,
    LTP: 326.1,
    MtM: 210.75,
    MtM_INR: 470.75,
    Exp: 1830,
    Exp_INR: 18300,
  },
  {
    Dealer: "NM00",
    BrokerID: "CBJ1350",
    Exchange: "NSEFO",
    Symbol: "NIFTY",
    Expiry: "13Feb2025",
    Strike: 23700,
    OptionType: "CE",
    OpenQuantity: 0,
    OpenPrice: 0,
    LTP: 42.05,
    MtM: 0,
    MtM_INR: 0,
    Exp: 0,
    Exp_INR: 0,
  },
];

const OptionsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(OPTIONS_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = OPTIONS_DATA.filter(
      (option) =>
        option.Dealer.toLowerCase().includes(term) ||
        option.BrokerID.toLowerCase().includes(term) ||
        option.Symbol.toLowerCase().includes(term) ||
        option.OptionType.toLowerCase().includes(term)
    );
    setFilteredOptions(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Dealer Options Data</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dealer, BrokerID, Symbol, or Option Type..."
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
              {[
                "Dealer",
                "BrokerID",
                "Exchange",
                "Symbol",
                "Expiry",
                "Strike",
                "OptionType",
                "OpenQuantity",
                "OpenPrice",
                "LTP",
                "MtM",
                "MtM_INR",
                "Exp",
                "Exp_INR",
              ].map((header) => (
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
            {filteredOptions.map((option, index) => (
              <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{option.Dealer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.BrokerID}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Exchange}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Expiry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Strike}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.OptionType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.OpenQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.OpenPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.LTP}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.MtM}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.MtM_INR}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Exp}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{option.Exp_INR}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OptionsTable;
