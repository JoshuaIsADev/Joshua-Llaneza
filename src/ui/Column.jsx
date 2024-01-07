import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

function Column({ children }) {
  return <StyledColumn>{children}</StyledColumn>;
}

export default Column;
