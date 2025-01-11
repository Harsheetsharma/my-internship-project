import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/Header';
import { MainImage } from './components/MainImage';
import { PostButtons } from './components/PostButton';
import { Posts } from './components/Posts';
import { Locations } from './components/Locations';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';

function AppContent() {
  const location = useLocation();

  const isSignupPage = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <div>
      {!isSignupPage && <Header />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {!isSignupPage && (
        <>
          <MainImage />
          <PostButtons />
          <Locations />
          <Posts />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
