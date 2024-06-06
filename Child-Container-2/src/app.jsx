import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import PageA from './pages/page-a';
// import PageB from './pages/page-b';
// import Home from './pages/home';
import './styles.css';
import Container from './component/container2';
import ChildRouter from './routes';

export default function App() {
  return (
    <div className="app">
      <Container />
      <ChildRouter />
    </div>
  );
}
