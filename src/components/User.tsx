import React from 'react';

//  string, number, void, boolean, null
type UserProps = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
};

const User = (props: UserProps) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem' }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
      {props.isRegistered ? <p>Junior Salesman</p> : <p>Senior Salesman</p>}
    </div>
  );
};

export default User;
