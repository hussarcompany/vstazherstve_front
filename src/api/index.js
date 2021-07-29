import axios from "axios";
import { BASE_API_URL } from "../utils/consts"

export const getUserById = (userId) => {
  const data = axios.get(`${BASE_API_URL}/get_user/${userId}`)
    .then(res => {
      return {
        error: false,
        userData: res.data[0]
      }
    })
    .catch(err => {
      console.log(err)
      return {
        error: true,
        userData: err
      }
    })
  return data
}