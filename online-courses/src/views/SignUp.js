//import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function SignForm() {
  return (
    
    <form>
      <h1 className="heading">Sign Up</h1>
      <label>Name <input type="text" />
      </label>
      <p>
      <label>Email <input type={'email'} />
      </label>
      </p>
            
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignForm/>);

export default function SignUp() { 
  return (
     <section>

      <SignForm />

    </section>
    );
  }
          