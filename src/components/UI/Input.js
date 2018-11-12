// @flow
import * as React from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')`
  padding: 6px 0;
  display: block;
  border: 0;
  width: 100%;
  border-bottom: 2px solid
    ${p => (p.invalid ? p.theme.colors.error : p.theme.colors.grey)};
  outline: none;
  font-family: ${p =>
    p.theme.typography.bodyFontFamily.map(font => `'${font}'`).join(', ')};
  line-height: 1.15;
  color: ${p => p.theme.colors.headingColor};
  background: transparent;
  resize: none; /* prevent resizing the textarea */

  &:active,
  &:focus {
    border-color: ${p =>
      p.invalid ? p.theme.colors.error : p.theme.colors.primary};
  }
`;

type InputProps = {
  tag: string,
  type: string,
  block?: boolean,
  invalid: string | boolean,
  defaultProps: {
    tag: 'input',
    text: 'text',
  },
};

/* eslint-disable no-param-reassign */
const Input: React.ComponentType<InputProps> = React.forwardRef(
  (
    { tag: Tag = 'input', type = 'text', block, invalid, color, ...attributes },
    ref
  ) => {
    if (Tag === 'input') {
      attributes.type = type;
    }

    if (
      attributes.children &&
      ((Tag === 'input' && type !== 'submit') ||
        type === 'radio' ||
        type === 'checkbox')
    ) {
      delete attributes.children;
    }

    return <Tag ref={ref} {...attributes} />;
  }
);

export default StyledInput.withComponent(Input);
