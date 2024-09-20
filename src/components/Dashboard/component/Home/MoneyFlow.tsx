import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data similar to the image
const moneyFlowData = [
  { date: 'DEC 2', amount: 500 },
  { date: 'DEC 3', amount: 1000 },
  { date: 'DEC 4', amount: 1500 },
  { date: 'DEC 5', amount: 2600 },
  { date: 'DEC 6', amount: 2200 },
  { date: 'DEC 7', amount: 3000 },
  { date: 'DEC 8', amount: 4000 },
];

const MoneyFlow = () => {
  return (
    <div className="p-4 bg-gradient-to-t from-[#F0F0F033] to-[#FAFBFC] border-[#D3E1F5] border rounded-xl">
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold text-[#343C6A] mb-2">Money Flow</h3>
        <div className="text-blue-500 flex items-center">
          <span className="mr-2">+6,79%</span>
          <button className="flex items-center text-sm border border-gray-300 rounded-md px-2 py-1">
            Week
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={moneyFlowData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="url(#colorUv)" 
              strokeWidth={3} 
              dot={{ stroke: '#34A5FF', strokeWidth: 3, r: 6 }} 
              activeDot={{ r: 8 }} 
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#34A5FF" stopOpacity={1}/>
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={1}/>
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoneyFlow;
