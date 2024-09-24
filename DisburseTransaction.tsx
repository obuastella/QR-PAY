import React from "react";
import axios from "axios";

const DisburseTransaction = () => {
  const handleDisburse = async () => {
    // Endpoint URL
    const url = "https://api.korapay.com/merchant/api/v1/transactions/disburse";

    // Form Data to be sent
    const data = {
      reference: "your-unique-transaction-reference-010",
      destination: {
        type: "bank_account",
        amount: "1000",
        currency: "NGN",
        narration: "Test Transfer Payment",
        bank_account: {
          bank: "033", // Bank code for the bank (e.g., "033" for United Bank for Africa)
          account: "0000000000", // Bank account number
        },
        customer: {
          name: "John Doe",
          email: "johndoe@email.com",
        },
      },
    };

    // Request headers with Authorization key
    const config = {
      headers: {
        Authorization:
          "Bearer sk_test_CMZB7dakKNFb2AqeX3fXFQJcXKgLTdGPSMjAq3iq",
        "Content-Type": "application/json",
      },
    };

    try {
      // Making the POST request
      const response = await axios.post(url, data, config);
      console.log("Response:", response.data); // Handle success
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Type narrowing for axios errors
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      } else {
        // Handle non-axios errors
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold">Disburse Transaction</h1>
      <button
        className="bg-black text-white flex items-center justify-center rounded-md mt-6 text-2xl p-4 h-10 w-40"
        onClick={handleDisburse}
      >
        Disburse Funds
      </button>
    </div>
  );
};

export default DisburseTransaction;
