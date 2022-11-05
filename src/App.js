// installed an auto-import extension & eslint JS extension!
import React from "react"
/* using react-dom according to carmelle's tutorial; the quickstart guide
for the new version is absolutely atrocious. reference that or this proj in future
for trying to figure out react-dom. omfgee. */
// see unofficial quickstart guide here: https://codezup.com/routing-using-react-router-dom-v6-in-react-js/
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

import * as ROUTES from "./constants/routes"
import './App.css';
import NavigationBar from './components/NavigationBar'; //index.js inside the folder allows us to just link the folder
import Hero from './components/Hero';
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import WebApp from "./pages/WebApp";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./context/AuthContext";



const App = () => {
  const {isLoading} = useAuth();
  return (

    isLoading ? (<h1>Loading, please wait...</h1>
    ) : (
      <Router>
      <NavigationBar />

      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<SignUpForm />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        {/* we're using /webapp as our redirect URI after auth success/fail */}
        <Route path={ROUTES.WEBAPP} element={<PrivateRoute><WebApp /></PrivateRoute>} />
        <Route path={ROUTES.HOME} element={<Hero />} />

      </Routes>

    </Router>)
  );
}

export default App;
