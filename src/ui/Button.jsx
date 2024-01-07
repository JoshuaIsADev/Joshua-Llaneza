import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    background-color: var(--color-grey-900);
    width: fit-content;

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,

  secondary: css`
    color: var(--color-grey-900);
    border: 0.5px solid var(--color-grey-500);
    background-color: var(--color-background);
    width: fit-content;

    &:hover {
      color: var(--color-grey-0);
      border: 1px solid var(--color-grey-900);
      background-color: var(--color-grey-900);
    }
  `,

  danger: css`
    color: var(--color-grey-900);
    border: 1px solid var(--color-danger);
    background-color: var(--color-danger);
    width: fit-content;

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,

  add: css`
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    background-color: var(--color-grey-900);
    width: 100%;
    margin-bottom: 3rem;

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 1.5rem;
  height: fit-content;
  padding: 0.4rem 1.5rem;
  /* margin-bottom: 0.5rem; */
  cursor: pointer;
  transition: all ease-in 0.1s;
  ${(props) => variations[props.$variation]}
`;

export default Button;
