
import './App.css';
import Show from './MyComponent/Show';
import Navbar from './MyComponent/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './MyComponent/AddUser';
import AddPost from './MyComponent/AddPost';
import Allpost from './MyComponent/Allpost';

function App() {


  return (
    <div className="App">


      <Router>
          <Navbar/>
      <Routes>
        <Route path="/" element={<Show />} /> 
        <Route path="/adduser" element={<AddUser />} /> 
        <Route path="/addpost" element={<AddPost />} /> 
        <Route path="/allpost" element={<Allpost />} /> 

      </Routes>
    </Router>

    {/* <Navbar/>
    <Show/> */}
    

    </div>
  );
}

export default App;
