import axios from "axios";



export const fetchRegister = async(params) => {
  const { data } = await axios.post('/auth/register', params);
  console.log(data);
  return data;
};