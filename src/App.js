import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SignInPage from './components/Signin/signin';
import HomePage from './components/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpPage from './components/Signup/Signup';
import SearchCandidate from './components/searchCandidate/searchCandidate';
const App = () => {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/search" element={<SearchCandidate/>}/>
      </Routes>
    </Router>
  );
};

export default App;
