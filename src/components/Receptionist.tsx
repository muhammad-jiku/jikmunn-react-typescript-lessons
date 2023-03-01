//  user defined types: object, array, enum, union, any, custom type

type ReceptionistsDataType = {
  //  array type
  receptionists: {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  }[];
};

const Receptionist = ({ receptionists }: ReceptionistsDataType) => {
  return (
    <div>
      {receptionists.map((receptionist, idx) => (
        <div style={{ border: '1px solid pink', margin: '1rem' }} key={idx}>
          <h2>{receptionist.name}</h2>
          <p>{receptionist.email}</p>
          <p>{receptionist.age} years old</p>
          <p>
            {receptionist.lang.map((language, idx) => (
              <span key={idx}>
                {language}
                {', '}
              </span>
            ))}
          </p>
          {receptionist.isRegistered ? (
            <p>Junior Receptionist</p>
          ) : (
            <p>Senior Receptionist</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Receptionist;
