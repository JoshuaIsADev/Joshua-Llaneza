import Button from './Button';

function Hero() {
  return (
    <section id='home'>
      <div className='hero-container'>
        <div className='hero-headline-container column'>
          <h1>
            Joshua is a frontend web developer with a background in landscape
            architecture & design. Whether it's with design or code, he enjoys
            solving problems and being creative.
          </h1>
        </div>
      </div>
      <div className='hero-container'>
        <div className='hero-dev-container column'>
          <ul className='info'>
            <h4>Dev skills</h4>
            <br />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <br />
            <li>Git</li>
            <li>React</li>
            <li>React Query</li>
            <li>Vite</li>
            <li>Styled Components</li>
            <li>Supabase</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className='hero-design-container column'>
          <ul className='info'>
            <h4>Design & other tech skills</h4>
            <br />
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
            <li>InDesign</li>
            <li>After Effects</li>
            <br />
            <li>
              <Button $variation='secondary'> & more...</Button>
            </li>
          </ul>
        </div>
        <div className='hero-img-container column'></div>
        <div className='hero-contact-container column'>
          <ul className='info'>
            <h4>Contact</h4>
            <br />
            <li>
              <Button $variation='secondary'>Github</Button>
            </li>
            <li>
              <Button $variation='secondary'>LinkendIn</Button>
            </li>
            <li>
              <Button $variation='secondary'>Email</Button>
            </li>
            <li>
              <Button $variation='secondary'>X</Button>
            </li>
            <li>
              <Button $variation='secondary'>Instagram</Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
