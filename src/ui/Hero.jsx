import Button from './Button';
import ProfileImg from '../img/joshua.jpg';
import { ArticleColumn, ArticleColumnHeader } from './ArticleColumn';
import InfoCardColumn from './InfoCardColumn';
import ArticleRow from './ArticleRow';
import InfoCardRow from './InfoCardRow';

function Hero() {
  return (
    <>
      <section id='home'>
        <ArticleRow>
          <ArticleColumnHeader>
            Joshua is a front end developer with a background in landscape
            architecture and design. From large urban landscapes to now the
            digital realm, he enjoys solving problems through design and tech.
          </ArticleColumnHeader>
        </ArticleRow>
      </section>

      <section>
        <ArticleRow>
          <ArticleColumn>
            <InfoCardRow>
              <InfoCardColumn>
                <h4>Dev skills</h4>
              </InfoCardColumn>
              <InfoCardColumn>
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
              </InfoCardColumn>
            </InfoCardRow>
            <InfoCardRow>
              <InfoCardColumn>
                <h4>Design skills</h4>
              </InfoCardColumn>
              <InfoCardColumn>
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
              </InfoCardColumn>
            </InfoCardRow>
            <InfoCardRow>
              <InfoCardColumn>
                <h4>Contact</h4>
              </InfoCardColumn>
              <InfoCardColumn>
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
              </InfoCardColumn>
            </InfoCardRow>
          </ArticleColumn>
          <ArticleColumn>
            <img src={ProfileImg} className='image-container' />
          </ArticleColumn>
        </ArticleRow>
      </section>
    </>
  );
}

export default Hero;
