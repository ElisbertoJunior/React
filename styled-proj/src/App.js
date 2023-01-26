import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

const App = () => {
  return (
   <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Feed' element={<Feed/>}/>
        </Routes>
   </Router>
  );
}

export default App;
