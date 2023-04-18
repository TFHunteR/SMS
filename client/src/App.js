import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginform from "./pages/Loginform";
import Students from "./pages/Student/Students";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./pages/Loginform";
import Navbar from "./compenents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideNavbar from "./compenents/SideNavBar";
import ReactSideNav from "./compenents/ReactSideNav.jsx";

//Students
import AllStudent from "./pages/Student/AllStudent.jsx";
import AddStudent from "./pages/Student/AddStudent.jsx";
import StudentPromotions from "./pages/Student/StudentPromotions.jsx";

//Teachers
import AllTeachers from "./pages/Teachers/AllTeachers.jsx";
import AddTeachers from "./pages/Teachers/AddTeachers.jsx";

//Account
import FeesGroup from "./pages/Account/FeesGroup.jsx";
import StudentFees from "./pages/Account/StudentFees.jsx";
import Expenses from "./pages/Account/Expenses.jsx";
import AddExpenses from "./pages/Account/AddExpenses.jsx";

//Dashboard
import Dashboard from "./pages/Dashboard.jsx";

//Subject
import Subject from "./pages/Subject.jsx";

//Settings
import Settings from "./pages/Settings.jsx";

//Taena mo pol gawin mo to bukas ng umaga

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/sidenavbar",
    element: <SideNavbar />,
  },
  {
    path: "/reactnav",
    element: <ReactSideNav />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path:"students",
    element: <Students/>,
    children:[
      {
        path:"all",
        element:<AllStudent/>
      }
    ]
  }
]);
function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <RouterProvider router={router} />
      </ProSidebarProvider>
    </div>
  );
}

export default App;
