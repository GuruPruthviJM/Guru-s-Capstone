import axios from "axios";

export const fetchColleguesFromAPI = async (id) => {
  try {
    const token = JSON.parse(sessionStorage.getItem('user'))?.token
    if (!token) {
      throw new Error("User not authenticated");
    }
    
    const response = await axios.get(`https://localhost:8000/api/employees/${id}/collegue`, {
        headers: { 
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json"
        },}
    );
    return response.data; // Assuming the API returns the array of colleagues
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch colleagues");
  }
};