import axios from "axios";
import { useState } from "react";

const DisburseTransaction = () => {
  const [formData, setFormData] = useState({
    amount: "",
    currency: "NGN",
    narration: "",
    bank: "",
    account: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDisburse = async () => {
    const uniqueReference = `txn-${Date.now()}`;

    const url = "https://api.korapay.com/merchant/api/v1/transactions/disburse";

    const data = {
      reference: uniqueReference,
      destination: {
        type: "bank_account",
        amount: formData.amount,
        currency: formData.currency,
        narration: formData.narration,
        bank_account: {
          bank: formData.bank,
          account: formData.account,
        },
        customer: {
          name: formData.name,
          email: formData.email,
        },
      },
    };

    const config = {
      headers: {
        Authorization:
          "Bearer sk_test_CMZB7dakKNFb2AqeX3fXFQJcXKgLTdGPSMjAq3iq",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, data, config);
      console.log("Response:", response.data);
      console.log(response.data.bank_code);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold">Disburse Transaction</h1>
      <form className="flex flex-col gap-4 mt-6 w-1/2">
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="narration"
          placeholder="Narration"
          value={formData.narration}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="bank"
          placeholder="Bank Code"
          value={formData.bank}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="account"
          placeholder="Bank Account Number"
          value={formData.account}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Customer Email"
          value={formData.email}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <button
          type="button"
          className="bg-black text-white p-2 rounded mt-4"
          onClick={handleDisburse}
        >
          Disburse Funds
        </button>
      </form>
    </div>
  );
};

export default DisburseTransaction;
