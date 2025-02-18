import { fetchColleguesFromAPI } from "../../../employee_module/services/collegueService";
import {
    FETCH_COLLEGUES_REQUEST,
    FETCH_COLLEGUES_SUCCESS,
    FETCH_COLLEGUES_FAILURE,
  } from "./collegueType";
  
  // Mock API Fetch (replace with real API call)
  export const fetchCollegues = (id) => async (dispatch) => {
    dispatch({ type: FETCH_COLLEGUES_REQUEST });
    try {
      const collegues = await fetchColleguesFromAPI(id);
      dispatch({ type: FETCH_COLLEGUES_SUCCESS, payload: collegues });
    } catch (error) {
      dispatch({ type: FETCH_COLLEGUES_FAILURE, payload: error.message });
    }
  };
  