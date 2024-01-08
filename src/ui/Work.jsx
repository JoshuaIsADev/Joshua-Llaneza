import workData from '../data/data';
import { joinString } from '../helper/Helper';
import { ArticleColumnHeader } from './ArticleColumn';
import ArticleRow from './ArticleRow';
import WorkCard from './WorkCard';

function Work() {
  const {
    id,
    title,
    client,
    tech,
    features,
    summary,
    liveLink,
    githubLink,
    image,
  } = workData[0];
  console.log(tech);

  const techString = joinString(tech);
  const featuresString = joinString(features);

  return (
    <>
      <section id='work'>
        <ArticleRow>
          <ArticleColumnHeader>Dev Work</ArticleColumnHeader>
        </ArticleRow>
      </section>

      <WorkCard
        id={id}
        title={title}
        client={client}
        tech={techString}
        features={featuresString}
        summary={summary}
        liveLink={liveLink}
        githubLink={githubLink}
        image={image}
      />
    </>
  );
}

export default Work;
