import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import Admin from "./admin";
import './index.css';
import Home from "./home";
import Gallery from "./gallery";
import Bathroom from "./bathroom-page";
import Terms from "./terms";
import GlobalStyle from "./global-style";


const root = createRoot(document.getElementById('app'))

class App extends React.Component {
  render() {
    return (
      <main>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    )
  }
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)