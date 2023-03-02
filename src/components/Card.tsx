import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

//  if css style needs as props then,
//  type CSSProps = {
//     btnStyle: CSSProperties;
//  };

const Card = (props: CardProps) => {
  return <div className="card">{props.children}</div>;
};

// const Card = (props: CSSProps) => {
//   return <div style={props.btnStyle}>hello</div>;
// };

export default Card;
