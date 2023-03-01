//  user defined types: object, array, enum, union, any, custom type

type MessageProps = {
  //  unioun type
  text: 'ADD' | 'UPDATE' | 'DELETE';
};

const Message = (props: MessageProps) => {
  if (props.text === 'ADD') {
    return <h3>User is added</h3>;
  } else if (props.text === 'UPDATE') {
    return <h3>User is updated</h3>;
  }
  return <h3>User is deleted</h3>;
};

export default Message;
