import axios from 'axios';

const API_URL = "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json"; // replace with your API

export const getDoctors = async (filters = {}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};
