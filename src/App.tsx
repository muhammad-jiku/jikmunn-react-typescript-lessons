import './App.css';
import User from './components/User';
import Message from './components/Message';
import Receptionist from './components/Receptionist';

function App() {
  const salesMan1 = {
    name: 'jim halpert',
    email: 'jameshlapert2010s@yahoo.co.uk',
    age: 32,
    isRegistered: true,
    lang: ['English'],
  };

  const salesMan2 = {
    name: 'dwight k. schrute',
    email: 'dwightkschrute162@gmail.com',
    age: 39,
    isRegistered: false,
    lang: ['English', 'Spanish', 'German', 'Russian'],
  };

  const receptionists = [
    {
      name: 'pam bessley',
      email: 'pambessley2010s@yahoo.co.uk',
      age: 32,
      isRegistered: false,
      lang: ['English'],
    },
    {
      name: 'erin',
      email: 'erin1523@gmail.com',
      age: 23,
      isRegistered: true,
      lang: ['English', 'Spanish'],
    },
  ];

  return (
    <div className="App">
      <h1>User Management</h1>
      <Message text="UPDATE" />
      <User user={salesMan1} />
      <User user={salesMan2} />
      <Receptionist receptionists={receptionists} />
    </div>
  );
}

export default App;
