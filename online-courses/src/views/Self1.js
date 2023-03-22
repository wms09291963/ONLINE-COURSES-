import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function SelfCheck1() {
  return (
    
    <form>
      <h1 className="heading">Self Check 1</h1>
      <label>1.	Fill in the blank. According to Alinsky’s plan, <input type="text" /> were the power base or revolutionary army for his agenda. 
      </label>
      <p>
      <label>2.	In your own words, describe the Modus Operandi. Their Modus Operandi is to recruit and train a revolutionary army and infiltrate every institution of American Society and government. They are taught to be flexible, opportunistic, say anything, do anything, even lie and deceive to get what you want, which is resources and power.
      <input type="text-box" />
      </label>
      </p>
      <p>
      <label>3.	Fill in the blank. Alinsky taught his followers that the issues, such as Women’s Rights or Black issues, were not the issues. The true ultimate goal was<input type="text" />
      </label>
      </p>
      <label>4.	List 3 of Alinksy’s followers.
      <input type="text" />
      </label>

      
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SelfCheck1/>);

export default function Self1() { 
  return (

  <section>

    <SelfCheck1 />

  </section>
  );
  }         