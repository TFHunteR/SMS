import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./pages/Loginform";
import Navbar from "./compenents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ProSidebarProvider} from "react-pro-sidebar";
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
    element: <Navbar/>,
  },
  {
    path: "/sidenavbar",
    element: <SideNavbar/>,
  },
  {
    path: "/reactnav",
    element: <ReactSideNav/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <RouterProvider router={router} />
  </ProSidebarProvider>
);

