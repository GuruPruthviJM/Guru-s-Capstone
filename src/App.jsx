import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CustomerHome from './customer_module/screens/CustomerHome.jsx';
import AboutUs from './customer_module/screens/About.jsx';
import Notifications from './customer_module/screens/Notification.jsx';
import MyTicket from './customer_module/screens/MyTickets.jsx';
import PurchaseSubcription from './customer_module/screens/PurchaseSubcription.jsx';
import Collegue from './employee_module/screens/Collegue.jsx';
import EmployeeHome from './employee_module/screens/EmployeeHome.jsx';
import EmployeeNotifications from './employee_module/screens/Notification.jsx';
import Login from './components/SignUp/LogIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Payment from './customer_module/screens/Payment.jsx';
import Admin from './admin_module/screens/adminHome.jsx';
import AddEmployee from './admin_module/screens/AddEmployee.jsx'
import Reset from './components/SignUp/Reset.jsx';
import DeleteEmployee from './admin_module/screens/DeleteEmployee.jsx'
import UpdateEmployee from './admin_module/screens/UpdateEmployee.jsx'
import ManagerHome from './manager_module/screens/ManagerHome.jsx'
import ManagerTickets from './manager_module/screens/ManagerTickets.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} /> {/* Done */}
          <Route path="/signup" element={<SignUp />} /> {/* Done */}
          <Route path="/reset" element={<Reset />} /> 
          <Route path="/" element={<CustomerHome />} />  
          <Route path="/customers" element={<CustomerHome />} />
          <Route path='/about' element={<AboutUs />} /> {/* Done */}
          <Route path='/notification' element={<Notifications />} />
          <Route path='/customers/:id/tickets' element={<MyTicket />} /> {/* Done */}
          <Route path='/customers/:id/purchase' element={<PurchaseSubcription />} /> {/* Done */}
          <Route path='/customers/:id/payments' element={<Payment />} /> {/* Done */}
          {/* Employee */}
          <Route path="/employees/:id/collegue" element={<Collegue />} />
          <Route path='/employees' element={<EmployeeHome />} />
          <Route path='/employees/notifications' element={<EmployeeNotifications />} />
          {/* Admin */}
          <Route path='/admins' element={<Admin />} />
          <Route path='/admins/addEmployee' element={<AddEmployee />} />
          
          <Route path='/admins/deleteEmployee' element={<DeleteEmployee />} />
          <Route path='/admins/updateEmployee' element={<UpdateEmployee />} />
          {/* Manager */}
          <Route path='/managers' element={<ManagerHome />} />
          <Route path='/managers/:id/tickets/:ticketStatus' element={<ManagerTickets />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
