import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Signup from './pages/Signup';
import User from './pages/User';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {'/'} element={<Home />}/>
        <Route path = {'/login'} element={<Login/>}/>
        <Route path = {'/questions'} element={<Questions/>}/>
        <Route path = {'/signup'} element={<Signup/>}/>
        <Route path = {'/user'} element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
