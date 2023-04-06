import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function SelfCheck2() {
  return (
    
    <form>
      <h1 class="heading">Self Check 2</h1>
      <label>1.	Alinsky dedicated his book to <input type="text" />
      </label>
      <p>
      <label>2.	In your own words, how would you describe the Leftist mindset? Possible answers: arrogant, hypocritical, assuming the moral high ground, revolutionary, manipulative, evil, etc.
      <input type="text" />
      </label>
      </p>
      <p>
      <label>3.	Two examples of manipulative tactics they employ are <input type="text" /> and <input type="text" /> labels and mantras
      </label>
      </p>
      <label>4.	List 3 of Alinksy’s followers.
      <input type="text" />
      </label>

      
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SelfCheck2/>);

export default function Self2() { 
  return (

   <section>

     <SelfCheck2 />

   </section>
   );
  }         