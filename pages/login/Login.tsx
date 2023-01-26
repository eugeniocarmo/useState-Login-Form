import React, { useState } from 'react'



export const Login = () => {
  
  
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    console.log(email)
  }

  
  return (
    <div>
      <br />
      <form>

        <label>
          <span>Email: </span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br /><br />

        <label>
          <span>Password: </span>
          <input type={'password'} />
        </label>
        
        <br /><br />
        <button type="button" onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
};

