import axios from "axios";

let url = "http://localhost:3000";

export const registerUser = async (body) => {
    console.log('registerUser')
  try {
    return await axios.post(`${url}/auth/register`, body);
  } catch (error) {
    console.log("Error in register api", error);
  }
};

export const loginUser = async (body) => {
try {
  return await axios.post(`${url}/auth/login`, body);
} catch (error) {
  console.log("Error in login api", error);
}
};
