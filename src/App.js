
import './App.css';
import Landing from './pages/Landing';
import Confirm from './pages/Confirm';
import Proposal from './pages/Proposal';
import Congratulation from './pages/Congratulation';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
      <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/confirm' element={<Confirm />} />
          <Route path='/proposal' element={<Proposal />} />
          <Route path='/congratulation' element={<Congratulation />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
