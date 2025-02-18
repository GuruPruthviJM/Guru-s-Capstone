import axios from 'axios';

const getTicketStatus = async (id) => {
  try {
    const token = sessionStorage.getItem('user')?.token
    if (!token) {
      throw new Error('User not authenticated');
    }
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`https://localhost:5000/api/managers/${id}/ticketStatus`,
        { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching ticket stats:", error);
    throw error;
  }
};

export default getTicketStatus
