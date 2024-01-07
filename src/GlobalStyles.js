import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-grey-0: #fff;
  --color-grey-100: #dedede;
  --color-grey-200: #bebebe;
  --color-grey-300: #9e9e9e;
  --color-grey-400: #808080;
  --color-grey-500: #636363;
  --color-grey-600: #484848;
  --color-grey-700: #2e2e2e;
  --color-grey-800: #161616;
  --color-grey-900: #000000;
  
  --color-danger: #000000;

  --background-color: #FFFFFF;

  --border-radius-sm: .5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 2rem;

  --container-width: 1920px;
  /* --container-width-small: 450px; */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: var(--color-gray-900)
}

body {
  font-family: 'Inter Tight', sans-serif;
  background-color: var(--background-color);
  letter-spacing: .05rem;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

ul li,
h4,
a {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

a:hover {
  color: var(--color-grey-300)
}

li {
  list-style: none;
  
}

ul.nav {
  display: flex;
  gap: 3rem;
}


h1 {
  font-size: 3rem;
  font-weight: 500;
  /* transform: translateX(-.5rem); */
  text-transform: uppercase;
}

h2 {
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

p {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height:.75rem;
}

small {
  font-size: .75rem;
  font-weight: 500;
}

#home,
#work {
  align-items: center;
  margin-bottom: 15rem;
}

.header-container,
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  max-width: var(--container-width);
}

.header-container {
  width: var(--container-width);
}

header {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  position: fixed;
  width: 100%;
}

.content-container {
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  padding: .25rem;
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: .25rem;
}

.hero-headline {
  width: 75%;
  padding: .25rem;
  margin: 10rem 0 0rem;
}

/* .summary-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem;
} */

img {
  /* object-fit: fill; */
}

.image {
  width: 75%;
  object-fit: cover;
}

//MEDIA QUERIES
@media (max-width: 1550px) {
  *,
  *::before,
  *::after {
    font-size: 12px;
  }
}
@media (max-width: 1100px) {
  *,
  *::before,
  *::after {
    font-size: 10px;
  }
}

@media (max-width: 800px) {
  .container {
  flex-direction: column;
  }

  .header-container {
  flex-direction: column;
  flex-direction: column-reverse;
  }

  .content-container {
  width: 100%;
  }

  .hero-headline {
  width: 100%;
  padding: .25rem;
  margin: 10rem 0 0rem;
}
}

//OVERRIDES
.faded {
  color: var(--color-grey-300)
}




`;

export default GlobalStyles;
