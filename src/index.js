import React from 'preact-compat';
import './style.css';
import './_datepicker.css';
import App from './components/App';
import preact from 'preact-compat';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    preact.render(<App />, rootElement, rootElement.firstElementChild);
} else {
    preact.render(<App />, rootElement);
}
serviceWorker.unregister();