import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

class VoleService {
  static async createVole(pUser) {
    let response = await axios.post(`${BASE_URL}/vole`, {
      body:JSON.stringify(pUser)
    });
    return response.data;
  }

  static async deleteVolee(pId) {
    let response = await axios.delete(`${BASE_URL}/vole/${pId}`, )
    return response.data
  }
  static async getVoleeById(pId) {
    console.log(pId)
    let response = await axios.get(`${BASE_URL}/vole/${pId}`)
    return response.data
  }
}
export default VoleService;
