import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import DetectMigraine from './DetectMigraine';
import BookAppointment from './BookAppointment';
import Home from './Home';
import NavBar from './NavBar';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/detectmigraine" element={<DetectMigraine />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;