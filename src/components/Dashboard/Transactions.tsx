export const recents = [
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=1" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=2" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=3" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=4" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=5" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=6" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=7" },
  { name: "Tobi Bakare", imageUrl: "https://i.pravatar.cc/150?img=10" },
];

export const transactions = [
  {
    name: "Simeon Adeniji",
    type: "Inward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: true,
  },
  {
    name: "Precious Njoku",
    type: "QR Transaction",
    amount: 200000,
    date: "05 Apr 2024",
    positive: false,
  },
  {
    name: "Simeon Adeniji",
    type: "Inward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: true,
  },
  {
    name: "Precious Njoku",
    type: "Outward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: false,
  },
  {
    name: "Simeon Adeniji",
    type: "Inward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: true,
  },
  {
    name: "Precious Njoku",
    type: "QR Transaction",
    amount: 200000,
    date: "05 Apr 2024",
    positive: false,
  },
  {
    name: "Simeon Adeniji",
    type: "Inward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: true,
  },
  {
    name: "Precious Njoku",
    type: "Outward Transfer",
    amount: 200000,
    date: "05 Apr 2024",
    positive: false,
  },
];

const Transactions = () => {
  return (
    <div className=" bg-white rounded-[24px] h-auto mb-12 p-6">
      {/* Recents Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Recents</h2>
        <div className="flex flex-wrap">
          {recents.map((recent, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center w-22 md:w-24"
            >
              <img
                className="w-10 h-10 md:w-10 md:h-10 rounded-full"
                src={recent.imageUrl}
                alt={recent.name}
              />
              <p className="text-sm mt-2">{recent.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="transactions over">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-gray-100 rounded-lg shadow p-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="transaction-item flex justify-between items-center py-2 border-b border-gray-200"
            >
              <div className="flex items-center">
                <span className="icon bg-gray-200 p-2 rounded-full mr-3">
                  {transaction.type === "QR Transaction"
                    ? "📱"
                    : transaction.positive
                    ? "⬆️"
                    : "⬇️"}
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{transaction.name}</span>
                  <span className="text-sm text-gray-500">
                    {transaction.type}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`font-medium ${
                    transaction.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.positive ? "₦" : "-₦"}
                  {transaction.amount.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  {transaction.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
