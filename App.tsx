import * as React from 'react';
import { Login } from './pages/login/Login';

import './style.css';


export default function App() {
  return (
    <div>
      <h1>useState Login Form</h1>
      <b>See useState code at "pages/login/Login.tsx"</b> 
      <Login />
    </div>
  );
}
