import React, { ChangeEvent, MouseEvent, useState } from 'react';

const NewUser = () => {
  const [username, setUsername] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleUsernameClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => !prevStatus);
  };
  return (
    <div>
      <h1>Create New User</h1>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={handleUsernameClick}>
        {!status ? 'Show' : 'Hide'} name
      </button>
      {status ? (
        <>
          <h2>{username}</h2>
        </>
      ) : null}
    </div>
  );
};

export default NewUser;
