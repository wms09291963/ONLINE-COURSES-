import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

import Courses from '../src/views/Courses';
import Home from '../src/views/Home';
import Encyclopedia from '../src/views/Encyclopedia';
import Resources from '../src/views/Resources';
import Gallery from '../src/views/Gallery';
import Rationale from '../src/views/Rationale';
import Saul from '../src/views/Saul';
import BookSales from '../src/views/BookSales';
import Community from '../src/views/Community'
import Self1 from '../src/views/Self1';
import Self2 from '../src/views/Self2';
import Dedication from '../src/views/Dedication';
import Characteristics from '../src/views/Characteristics';
import Mantras from '../src/views/Mantras';
import SignUp from '../src/views/SignUp';
import Navbar from '../src/Navigation/Navbar';
import { Route, Routes } from "react-router-dom";
import Header from '../src/Header';
import Footer from '../src/Footer';
 

function App() {
  
  return (
    <><div className="App">
       <div className="container">
         <div className='content-wrapper'>
           <div className="navbar">
            <Navbar />
           </div>
          <Header />
          

          <Routes>
             <Route path="/home" element={<Home />} />   
             <Route path="/encyclopedia" element={<Encyclopedia />} />   
             <Route path="/index" element={<index />} /> 
             <Route path="/courses" element={<Courses />} /> 
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/characteristics" element={<Characteristics />} />
             <Route path="/community" element={<Community />} />
             <Route path="/dedication" element={<Dedication />} />
             <Route path="/mantras" element={<Mantras />} />
             <Route path="/rationale" element={<Rationale />} />
             <Route path="/self1" element={<Self1 />} />
             <Route path="/self2" element={<Self2 />} />
             <Route path="/saul" element={<Saul />} />
             <Route path="/booksales" element={<BookSales />} />
             <Route path="/resources" element={<Resources />} />
             <Route path="/header" element={<Header />} />
             <Route path="/footer" element={<Footer />} />
             <Route path="/mdb-react-ui-kit" element={<mdb-react-ui-kit />} />
          </Routes>

          </div>
        </div>
      </div>
      <Footer />
      <br /><br />
      <></>
    </>

 )

}

export default App

