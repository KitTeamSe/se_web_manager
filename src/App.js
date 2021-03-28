import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from './components/atoms/AppBar';
import MyButton from './components/atoms/MyButton';
import Logo from './statics/svg/Logo';

function App() {
  return (
    <div>
      <AppBar />
      <div>aa</div>
      <div>
        <MyButton variant="contained" color="secondary">
          Button
        </MyButton>
        <MyButton variant="contained" color="main">
          Button
        </MyButton>
        <Logo />
      </div>
    </div>
  );
}

export default App;
