import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    margin: 10rem 0 0rem;
  `,
};

const StyledArticle = styled.article`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  padding: 0.25rem;
  ${(props) => variations[props.$variation]}
`;

export default StyledArticle;
