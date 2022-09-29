import React from 'react';

const Container: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
