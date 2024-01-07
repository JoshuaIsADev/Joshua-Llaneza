import Button from './Button';
import ProfileImg from '../img/joshua.jpg';

function Hero() {
  return (
    <>
      <section id='home'>
        <div className='container'>
          <div className='hero-headline'>
            <h1>
              Joshua is a front end web developer with a background in landscape
              architecture and design. From large urban landscapes to now the
              digital realm, he enjoys solving problems through design and tech.
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='content-container'>
            <div className='content'>
              <ul className='info'>
                <h4>Design skills</h4>
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
            <div className='content'>
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
          </div>
          <div className='content-container'>
            <div className='content'>
              <img src={ProfileImg} alt='' className='image' />
            </div>

            <div className='content'>
              <ul className='info'>
                <h4>Contact</h4>
                <br />
                <li>
                  <a href='https://github.com/JoshuaIsADev'>Github</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/joshuallaneza/'>
                    LinkendIn
                  </a>
                </li>
                <li>
                  <a href='mailto:joshuaisadev@gmail.com'>Email</a>
                </li>
                <li>
                  <a href='https://twitter.com/JoshuaIsADev'>X</a>
                </li>
                <li>
                  <a href='https://www.instagram.com/joshual3399/'>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
