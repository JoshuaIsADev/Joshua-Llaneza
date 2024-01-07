import styled from 'styled-components';
import Button from './Button';
import Column from './Column';

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  position: fixed;
  width: var(--container-width);
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  padding: 0.25rem;
`;

function Header() {
  return (
    <div className='container'>
      <StyledHeader>
        <StyledNav>
          <Column>
            <Button $variation='secondary'>Hello / Contact</Button>
          </Column>
          <Column>
            <Button $variation='secondary'>Work</Button>
          </Column>
        </StyledNav>
        <StyledNav>
          <Column>
            <h3>Joshua Llaneza</h3>
          </Column>
          <Column>
            <h3>Frontend Web Developer</h3>
          </Column>
        </StyledNav>
      </StyledHeader>
    </div>
  );
}

export default Header;
