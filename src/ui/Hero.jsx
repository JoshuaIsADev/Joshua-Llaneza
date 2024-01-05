function Hero() {
  return (
    <section id='home'>
      <div className='container'>
        <div className='hero-headline-container column'>
          <h1>
            Joshua is a frontend web developer with a background in landscape
            architecture & design. Whether it's with design or code, he enjoys
            solving problems and being creative.
          </h1>
        </div>
      </div>
      <div className='container'>
        <div className='hero-dev-container column'>
          <ul>
            <h4>Dev skills</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
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
          <ul>
            <h4>Design & other tech skills</h4>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
            <li>InDesign</li>
            <li>After Effects</li>
            <li>& more...</li>
          </ul>
        </div>
        <div className='hero-img-container column'></div>
        <div className='hero-contact-container column'>
          <ul>
            <h4>Contact</h4>
            <li>Github</li>
            <li>LinkendIn</li>
            <li>Email</li>
            <li>X</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
