import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

const NewUser = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleDataClick = (e: FormEvent<HTMLFormElement>): object => {
    e.preventDefault();
    setStatus(true);
    const newUser = { username, email };
    console.log(newUser);
    return newUser;
  };
  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleDataClick}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {status ? (
        <>
          <h2>{username}</h2>
          <h2>{email}</h2>
        </>
      ) : null}
    </div>
  );
};

export default NewUser;
