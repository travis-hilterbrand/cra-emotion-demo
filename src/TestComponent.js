/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const color = 'white';

const TestComponent = () => (
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
);

export default TestComponent;
