import styled from 'styled-components';

const StyledInfoCardColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

function InfoCardColumn({ children }) {
  return <StyledInfoCardColumn>{children}</StyledInfoCardColumn>;
}

export default InfoCardColumn;
