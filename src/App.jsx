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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/" element={<CustomerHome />} />
          <Route path="/customers" element={<CustomerHome />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/ticket' element={<MyTicket />} />
          <Route path='/purchase' element={<PurchaseSubcription />} />
          <Route path='/payments' element={<Payment />} />
          {/* Employee */}
          <Route path="/employees/collegue" element={<Collegue />} />
          <Route path='/employees' element={<EmployeeHome />} />
          <Route path='/employees/notifications' element={<EmployeeNotifications />} />
          {/* Admin */}
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/addEmployee' element={<AddEmployee />} />
          <Route path='/admin/deleteEmployee' element={<DeleteEmployee />} />
          <Route path='/admin/updateEmployee' element={<UpdateEmployee />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
