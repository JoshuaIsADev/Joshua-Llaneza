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

  --container-width: 2560px;
  /* --container-width-small: 450px; */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;


}

body {
  font-family: 'Noto Sans', sans-serif;
  background-color: var(--background-color);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

li {
  list-style: none;
}

ul.nav {
  display: flex;
  gap: 3rem;
}

ul li {
  font-size: .875rem;
  font-weight: 400;
  padding-bottom: .2rem;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
}

h4 {
  font-size: .875rem;
  font-weight: 400;
  color: var(--color-grey-300)
}

#home,
#work {
  align-items: center;
}

.heading-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem;
  max-width: var(--container-width);
}

.hero-container,
.work-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 10rem;
  max-width: var(--container-width);
}

.column {
  --columns: 4;
  --width: 0;
  flex-basis: calc(var(--width) / var(--columns) * 100%);
}

.hero-headline-container {
  --width: 3;
}

.hero-dev-container,
.hero-design-container,
.hero-img-container,
.hero-contact-container {
  --width: 1;
}

//OVERRIDES
.faded {
  color: var(--color-grey-300)
}


`;

export default GlobalStyles;
