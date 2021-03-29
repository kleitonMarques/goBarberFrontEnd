import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = () => (
  <Container>
    <button type="button">teste</button>
  </Container>
);

export default Button;
