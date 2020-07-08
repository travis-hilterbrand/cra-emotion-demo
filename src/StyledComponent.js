import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const StyledComponent = () => {
  return (
    <>
      <Div>Hover to change color.</Div>
    </>
  );
};

export default StyledComponent;
