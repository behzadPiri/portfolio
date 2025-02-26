import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from "./containers"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
