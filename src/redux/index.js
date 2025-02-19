// src/redux/reducers/index.js
import ticketReducer from './customer_model/Ticket/ticketReducer';
import paymentReducer from './customer_model/Payments/paymentReducer';
import authReducer from './signUp/logIn/logInReducer';
import signUpReducer from './signUp/signIn/signInReducer';
import collegueReducer from './employee_module/collegue/collegueReducers';
import managerStatusReducer from './manager_module/managerHomeStatus/managerStatusReducers';

import managerTicketReducer from './manager_module/managerTicketTable/managerTicketReducer';

const rootReducer = {
    tickets: ticketReducer,
    payments: paymentReducer,
    auth: authReducer,
    signUp: signUpReducer,
    collegue: collegueReducer,
    managerStatus: managerStatusReducer,
    managerTicket: managerTicketReducer
};

export default rootReducer;
