// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Table1 from './Table1';
//import Table from './Table'; // Import Table component

function App() {
  return (
    <Router>
        <Routes>
          {/*<Route path="/SignIn" exact component={SignIn} /> */}
          <Route path="/table1" element={<Table1 />} />
        </Routes>
    </Router>
  );
}

export default App;
