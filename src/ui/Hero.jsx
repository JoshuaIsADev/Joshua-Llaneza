import Button from './Button';
import ProfileImg from '../img/joshua.jpg';
import { Article, ArticleHero } from './Article';
import Column from './Column';
import Row from './Row';

function Hero() {
  return (
    <>
      <section id='home'>
        <div className='container'>
          <ArticleHero>
            <h1>
              Joshua is a front end developer with a background in landscape
              architecture and design. From large urban landscapes to now the
              digital realm, he enjoys solving problems through design and tech.
            </h1>
          </ArticleHero>
        </div>
      </section>

      <section>
        <div className='container'>
          <Article>
            <Row>
              <Column>
                <h4>Dev skills</h4>
              </Column>
              <Column>
                <ul className='info'>
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
              </Column>
            </Row>
            <Row>
              <Column>
                <h4>Design skills</h4>
              </Column>
              <Column>
                <ul>
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
              </Column>
            </Row>
            <Row>
              <Column>
                <h4>Contact</h4>
              </Column>
              <Column>
                <ul>
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
                    <a href='https://www.instagram.com/joshual3399/'>
                      Instagram
                    </a>
                  </li>
                </ul>
              </Column>
            </Row>
          </Article>
          <Article>
            <img src={ProfileImg} className='image-container' />
          </Article>
        </div>
      </section>
    </>
  );
}

export default Hero;
