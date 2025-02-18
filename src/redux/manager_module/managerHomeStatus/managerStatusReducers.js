import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "./managerStatusType";

const initialState = {
    open: 0,
    inProgress: 0,
    closed: 0,
    loading: false,
    error: null,
  };
  
  const managerStatusReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TICKETS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TICKETS_SUCCESS:
        return {
          ...state,
          loading: false,
          open: action.payload.open,
          inProgress: action.payload.inProgress,
          closed: action.payload.closed,
        };
      case FETCH_TICKETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default managerStatusReducer;
  