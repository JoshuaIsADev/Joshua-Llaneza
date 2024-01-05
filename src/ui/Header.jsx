import Button from './Button';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='heading-container'>
          <ul className='nav'>
            <li>
              <Button $variation='secondary'>Hello / Contact</Button>
            </li>
            <li>
              <Button $variation='secondary'>Work</Button>
            </li>
          </ul>
          <ul className='nav'>
            <li>Joshua Llaneza</li>
            <li className='faded'>Frontend Web Developer</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
