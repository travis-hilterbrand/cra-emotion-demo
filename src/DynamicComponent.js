import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const dynamicStyle = (props) =>
  css`
    padding: 32px;
    color: ${props.color ? props.color : 'red'};
  `;

const Container = styled.div`
  ${dynamicStyle};
`;

const DynamicComponent = () => {
  return (
    <>
      <Container color="lightgreen">Light green</Container>
      <Container>Red</Container>
    </>
  );
};

export default DynamicComponent;
