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

h1 {
  font-size: 3rem;
}

#home,
#work {
  align-items: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
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



`;

export default GlobalStyles;
