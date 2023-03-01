import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User
        name="jim halpert"
        email="jameshlapert2010s@yahoo.co.uk"
        age={32}
        isRegistered={true}
      />
      <User
        name="dwight k. schrute"
        email="dwightkschrute162@gmail.com"
        age={39}
        isRegistered={false}
      />
    </div>
  );
}

export default App;
