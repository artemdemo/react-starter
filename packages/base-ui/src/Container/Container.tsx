import React from 'react';

export const Container: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <div className="container">{props.children}</div>;
};
