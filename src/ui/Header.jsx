import Button from './Button';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <nav className='content-container'>
          <div className='content'>
            <Button $variation='secondary'>Hello / Contact</Button>
          </div>
          <div className='content'>
            <Button $variation='secondary'>Work</Button>
          </div>
        </nav>
        <div className='content-container'>
          <div className='content'>
            <h3>Joshua Llaneza</h3>
          </div>
          <div className='content'>
            <h3>Frontend Web Developer</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
