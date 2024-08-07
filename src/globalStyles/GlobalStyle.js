import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

/* ----------- basic properties ---------------- */

html{
  width: 100%;
  overflow-x: hidden;
  background-color: white;
}
   body {
        font-family: 'Verdana', sans-serif; //set main font from data/fonts and add link in main index.js
        font-size: 14px;
        line-height: 1.28;
        font-weight: 400;
        width: 100%;
        overflow-x: hidden;
         }

/* ----------- basic properties ---------------- */

/* ================ components ================ */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li{
  color: inherit;
}

a{
text-decoration: none;
color: inherit;
}
img {
  display: block;
}

.root{
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

button{
  background-color: inherit;
}
/* ================ components ================ */

/* ++++++++++++++++ slider ++++++++++++++++++++= */





/* ++++++++++++++++ slider ++++++++++++++++++++= */

`;
