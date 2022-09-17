import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

class nonProService {
  static async createNonpro(pUser) {
    let response = await axios.post(`${BASE_URL}/noneProfitOrg`, {
      email: pUser.email,
      password: pUser.password,
    });
    return response.data;
  }

  static async checkNonpro(pUser) {
    let response = await axios.post(`${BASE_URL}/noneProfitOrg/check`, {
      email: pUser.email,
      password: pUser.password,
    });
    console.log(response.data)
    return response.data;
  }


  
}
export default nonProService;
