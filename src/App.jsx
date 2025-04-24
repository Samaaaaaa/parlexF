import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import AddAtorney from './superAdmin/AddAtorney';
import SignIn from './components/Atorney/SignIn';
import PasswordReset from './components/Atorney/PasswordReset';
import GeneralSettings from './components/Atorney/GeneralSettings';
import SignUp from './components/Atorney/SignUp';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     
        <main>
          <Navbar />
        
          {/* <Card /> */}
          {/* <SignIn/> */}
          <SignUp/>
          {/* <GeneralSettings/> */}
          {/* <AddAtorney/> */}
          {/* <PasswordReset></PasswordReset> */}
        </main>
     
    </div>
  );
};

export default App;
