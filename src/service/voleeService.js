import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

class VoleService {
  static async createVole(pUser) {
    console.log(pUser);
    let response = await axios.post(`${BASE_URL}/volee`, {
      email: pUser.email,
      password: pUser.password,
    });
    return response.data;
  }


  static async deleteVolee(pId) {
    let response = await axios.delete(`${BASE_URL}/volee/${pId}`);
    return response.data;
  }
  static async getVoleeById(pId) {
    console.log(pId);
    let response = await axios.get(`${BASE_URL}/volee/${pId}`);
    return response.data;
  }

  static async getVolee(pId) {
    console.log(pId);
    let response = await axios.get(`${BASE_URL}/volee/${pId}`);
    return response.data;
  }
}
export default VoleService;
