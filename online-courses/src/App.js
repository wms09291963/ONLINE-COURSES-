import '../src/App.css';
import Gallery from '../src/views/Gallery';
import Rationale from '../src/views/Rationale';
import Saul from '../src/views/Saul';
import Community from '../src/views/Community'
import Self1 from '../src/views/Self1';
import Self2 from '../src/views/Self2';
import Dedication from '../src/views/Dedication';
import Characteristics from '../src/views/Characteristics';
import Mantras from '../src/views/Mantras';
import Navbar from '../src/Navigation/Navbar';
import { Route, Routes } from "react-router-dom"
 

function App() {
  
return (
  <>
  <Navbar />
  <div className="container">
  
   
    <Routes>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/characteristics" element={<Characteristics />} />
      <Route path="/community" element={<Community />} />
      <Route path="/dedication" element={<Dedication />} />
      <Route path="/mantras" element={<Mantras />} />
      <Route path="/rationale" element={<Rationale />} />
      <Route path="/self1" element={<Self1 />} />
      <Route path="/self2" element={<Self2 />} />
      <Route path="/saul" element={<Saul />} />

    </Routes>

  </div>
  <>
    </></>

 )

 //{component}

}


export default App

