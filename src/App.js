import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard'; 
import Main from './pages/main';
import ScrapingJobs from "./pages/scrapingjobs";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="scrapingjobs" element={<ScrapingJobs/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
