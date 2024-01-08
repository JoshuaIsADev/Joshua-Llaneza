import workData from '../data/data';
import { joinString } from '../helper/Helper';
import { ArticleColumnHeader } from './ArticleColumn';
import ArticleRow from './ArticleRow';
import WorkCard from './WorkCard';

function renderWorkCards() {
  return workData.map((workItem) => {
    const {
      id,
      title,
      client,
      tech,
      features,
      summary,
      liveLink,
      liveDummyLink,
      githubLink,
      image,
    } = workItem;

    const techString = joinString(tech);
    const featuresString = joinString(features);

    return (
      <WorkCard
        key={id}
        title={title}
        client={client}
        tech={techString}
        features={featuresString}
        summary={summary}
        liveLink={liveLink}
        liveDummyLink={liveDummyLink}
        githubLink={githubLink}
        image={image}
      />
    );
  });
}

function Work() {
  return (
    <>
      <section id='work'>
        <ArticleRow>
          <ArticleColumnHeader>Dev Work</ArticleColumnHeader>
        </ArticleRow>
      </section>

      {renderWorkCards()}
    </>
  );
}

export default Work;
