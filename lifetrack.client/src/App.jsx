import { useEffect, useState } from 'react';
import './App.css';

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default App;
