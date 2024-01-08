import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    margin: 10rem 0 0rem;
  `,
};

const StyledArticleColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  /* padding: 0.25rem; */
  justify-content: space-between;
  gap: 1rem;
  ${(props) => variations[props.$variation]}
`;

function ArticleColumnHeader({ children }) {
  return (
    <StyledArticleColumn $variation='hero'>
      <h1>{children}</h1>
    </StyledArticleColumn>
  );
}

function ArticleColumn({ children }) {
  return <StyledArticleColumn>{children}</StyledArticleColumn>;
}

export { ArticleColumnHeader, ArticleColumn };
