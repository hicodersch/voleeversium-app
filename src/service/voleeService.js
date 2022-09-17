const BASE_URL = process.env.REACT_APP_API_URL;

class VoleService {
  static async createVole(pFirstName, pLastName, pEmail,pPicture,pSkills) {
    let response = await axios.post(`${BASE_URL}/vole`, {
      firstName: pFirstName,
      lastName: pLastName,
      email: pEmail,
      picture:pPicture,
      skills:pSkills
    });
    return response.data;
  }

  static async deleteVolee(pId) {
    let response = await axios.delete(`${BASE_URL}/vole/${pId}`, )
    return response.data
  }
  static async getVoleeById(pId) {
    console.log(pUserId)
    let response = await axios.get(`${BASE_URL}/vole/${pId}`)
    return response.data
  }
}
export default VoleService;
