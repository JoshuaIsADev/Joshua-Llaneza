import styled from 'styled-components';

const StyledArticleRow = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  max-width: var(--container-width);
  justify-content: right;
`;

function ArticleRow({ children }) {
  return <StyledArticleRow>{children}</StyledArticleRow>;
}

export default ArticleRow;
