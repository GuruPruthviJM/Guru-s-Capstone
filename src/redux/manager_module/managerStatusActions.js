import getTicketStatus from "../../manager_module/services/managerStatusService";
import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from "./managerStatusType";

export const fetchTicketStats = (id) => async (dispatch) => {
  dispatch({ type: FETCH_TICKETS_REQUEST });
  try {
    const { OPEN: open, PENDING: inProgress, CLOSED: closed } = await getTicketStatus(id);
    dispatch({
      type: FETCH_TICKETS_SUCCESS,
      payload: { open, inProgress, closed },
    });
  } catch (error) {
    console.error("Error fetching ticket stats:", error);   
    dispatch({
      type: FETCH_TICKETS_FAILURE,
      payload: error.message,
    });
  }
};
