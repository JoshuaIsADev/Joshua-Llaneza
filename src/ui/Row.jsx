import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}

export default Row;
