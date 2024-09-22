import axios from 'axios';
import { API_URL, API_KEY } from './API';

export const fetchBanks = async () => {
  try {
    const response = await axios.get(`${API_URL}/misc/banks?countryCode=NG`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching banks:', error);
    throw error;
  }
};

export const resolveAccount = async (bankCode: string, accountNumber: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/misc/banks/resolve`,
      {
        account: accountNumber,
        bank: bankCode,
        currency: 'NGN',
      },
    );
    return response.data.account_name;
  } catch (error) {
    console.error('Error resolving account:', error);
    throw error;
  }
};
