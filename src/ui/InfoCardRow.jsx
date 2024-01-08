import styled from 'styled-components';

const StyledInfoCardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  /* margin-bottom: 1rem; */
`;

function InfoCardRow({ children }) {
  return <StyledInfoCardRow>{children}</StyledInfoCardRow>;
}

export default InfoCardRow;
