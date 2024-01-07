import GlobalStyles from './GlobalStyles';
import logo from './logo.svg';
import Header from './ui/Header';
import Hero from './ui/Hero';
import Work from './ui/Work';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        {/* <Work /> */}
      </main>
    </>
  );
}

export default App;
