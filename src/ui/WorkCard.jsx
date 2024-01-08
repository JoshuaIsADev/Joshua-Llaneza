import { ArticleColumn } from './ArticleColumn';
import ArticleRow from './ArticleRow';
import InfoCardColumn from './InfoCardColumn';
import InfoCardRow from './InfoCardRow';

function WorkCard(props) {
  console.log(props.image);
  return (
    <>
      <section className='work-detail'>
        <ArticleRow>
          <ArticleColumn>
            <InfoCardRow>
              <InfoCardColumn>
                <h4>Client</h4>
              </InfoCardColumn>
              <InfoCardColumn>
                <p>{props.client}</p>
              </InfoCardColumn>
            </InfoCardRow>

            <InfoCardRow>
              <InfoCardColumn>
                <h4>Tech</h4>
              </InfoCardColumn>
              <InfoCardColumn>
                <p>{props.tech}</p>
              </InfoCardColumn>
            </InfoCardRow>

            <InfoCardRow>
              <InfoCardColumn>
                <h4>Features</h4>
              </InfoCardColumn>
              <InfoCardColumn>
                <p>{props.features}</p>
              </InfoCardColumn>
            </InfoCardRow>

            <InfoCardRow>
              <InfoCardColumn>
                <h4>Summary</h4>
              </InfoCardColumn>
              <InfoCardColumn>
                <p>{props.summary}</p>
              </InfoCardColumn>
            </InfoCardRow>

            <InfoCardRow>
              <InfoCardColumn>
                <h4>Links</h4>
              </InfoCardColumn>
              <InfoCardColumn>
                <li>
                  <a href={props.liveLink}>View Live</a>
                </li>
                {props.liveDummyLink && (
                  <li>
                    <a href={props.liveDummyLink}>View Dummy CMS Live</a>
                  </li>
                )}

                <li>
                  <a href={props.githubLink}>Github</a>
                </li>
              </InfoCardColumn>
            </InfoCardRow>
          </ArticleColumn>

          <ArticleColumn>
            <img
              src={props.image}
              className='image-container'
              alt='Animated gif of work'
            />
          </ArticleColumn>
        </ArticleRow>
      </section>
    </>
  );
}

export default WorkCard;
