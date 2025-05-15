import {BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Card from "./components/Card/Card";
import AddAtorney from './superAdmin/AddAtorney';
import SignIn from './components/Atorney/SignIn/SignIn';
import SignUp from './components/Atorney/SignUp/SignUp';
import PasswordReset from './components/Atorney/PasswordReset/PasswordReset';
import GeneralSettings from './components/Atorney/GeneralSettings/GeneralSettings';
import Layout from './components/Layouts/Layout';

let routers = createBrowserRouter([
  {path: '', element:<Layout/>, children:[
    {path: 'signUp', element: <SignUp />},
    {path: 'signIn', element: <SignIn/>},
  ]}
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <main>
          <Layout/>
          {/* <Card/> */}
          {/* <SignUp/> */}
          {/* <SignIn/> */}
          {/* <AddAtorney/> */}
          {/* <PasswordReset/> */}
          <GeneralSettings/>
        </main>
    </div>
  );
};

export default App;
