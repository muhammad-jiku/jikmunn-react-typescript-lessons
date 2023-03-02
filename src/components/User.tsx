//  built-in types: string, number, void, boolean, null
//  user defined types: object, array, enum, union, any, custom type

import Card from './Card';

type UserDataType = {
  //  object type
  user: {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserDataType) => {
  return (
    // <div style={{ border: '1px solid', margin: '1rem' }}>
    <Card>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
      <p>
        {user.lang.map((language, idx) => (
          <span key={idx}>
            {language}
            {', '}
          </span>
        ))}
      </p>
      {user.isRegistered ? <p>Junior Salesman</p> : <p>Senior Salesman</p>}
    </Card>
    // </div>
  );
};

export default User;
