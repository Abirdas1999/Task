import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const exposureData = [
  {
    Dealer: "NM06",
    AvailableCapital: 1000000,
    TotalExposureLimit: 10000000,
    ExposureRealTime: 4264260,
    RemainingExposure: 5735740,
  },
  {
    Dealer: "NM6",
    AvailableCapital: 1200000,
    TotalExposureLimit: 12000000,
    ExposureRealTime: 4592280,
    RemainingExposure: 7407720,
  },
  {
    Dealer: "NM33",
    AvailableCapital: 1000000,
    TotalExposureLimit: 10000000,
    ExposureRealTime: 3280200,
    RemainingExposure: 6719800,
  }
];

const BarTrend = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Stocks</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={exposureData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="Dealer" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="AvailableCapital" fill="#10B981" name="Available Capital" />
            <Bar dataKey="TotalExposureLimit" fill="#3B82F6" name="Total Exposure Limit" />
            <Bar dataKey="ExposureRealTime" fill="#F59E0B" name="Exposure Real-Time" />
            <Bar dataKey="RemainingExposure" fill="#EF4444" name="Remaining Exposure" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default BarTrend;
