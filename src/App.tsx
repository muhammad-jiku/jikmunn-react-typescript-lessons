import { useState } from 'react';
import './App.css';
import User from './components/User';
import Message from './components/Message';
import Receptionist from './components/Receptionist';
import NewUser from './components/NewUser';

function App() {
  // const [count, setCount] = useState<number>(0);

  // const handleInc = () => {
  //   setCount((count) => count + 1);
  // };
  // const handleDec = () => {
  //   setCount((count) => count - 1);
  // };
  // const handleReset = () => {
  //   setCount((count) => (count = 0));
  // };

  // const salesMan1 = {
  //   name: 'jim halpert',
  //   email: 'jameshlapert2010s@yahoo.co.uk',
  //   age: 32,
  //   isRegistered: true,
  //   lang: ['English'],
  // };

  // const salesMan2 = {
  //   name: 'dwight k. schrute',
  //   email: 'dwightkschrute162@gmail.com',
  //   age: 39,
  //   isRegistered: false,
  //   lang: ['English', 'Spanish', 'German', 'Russian'],
  // };

  // const receptionists = [
  //   {
  //     name: 'pam bessley',
  //     email: 'pambessley2010s@yahoo.co.uk',
  //     age: 32,
  //     isRegistered: false,
  //     lang: ['English'],
  //   },
  //   {
  //     name: 'erin',
  //     email: 'erin1523@gmail.com',
  //     age: 23,
  //     isRegistered: true,
  //     lang: ['English', 'Spanish'],
  //   },
  // ];

  return (
    <div className="App">
      {/* <h1> Count: {count} </h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button> */}
      {/* <h1>Children Props</h1>
      <Message text="UPDATE" />
      <User user={salesMan1} />
      <User user={salesMan2} />
      <Receptionist receptionists={receptionists} /> */}
      <NewUser />
    </div>
  );
}

export default App;
