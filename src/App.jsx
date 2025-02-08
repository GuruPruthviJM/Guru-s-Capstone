import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CustomerHome from './customer_module/screens/CustomerHome.jsx';
import AboutUs from './customer_module/screens/About.jsx';
import Notifications from './customer_module/screens/Notification.jsx';
import MyTicket from './customer_module/screens/MyTickets.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<CustomerHome />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/ticket' element={<MyTicket />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
