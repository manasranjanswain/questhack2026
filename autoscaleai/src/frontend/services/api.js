// API calls

import axios from "axios";

export const analyzeServer = async (server) => {
  const res = await axios.get(`http://localhost:8000/analyze/${server}`);
  return res.data;
};