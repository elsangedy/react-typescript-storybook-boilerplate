import * as React from 'react';

export interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

const MyComponent: React.SFC<MyComponentProps> = ({
  title,
  children
}) => (
  <div>
    <h1>{title}</h1>
    <hr />
    {children}
  </div>
);

export default MyComponent;
