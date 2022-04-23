# Getting Started with Create React App using react@17 react-dom@17 react-router-dom@5.2.0

### `package.json`

Uninstall/replace

"react": "^18.0.0"\
"react-dom": "^18.0.0"

with

"react": "^17.0.2"\
"react-dom": "^17.0.2"

### `index.js`

Replace

import ReactDOM from 'react-dom/client'

with

import ReactDOM from 'react-dom';

### `still in index.js`

Replace

const root = ReactDOM.createRoot(document.getElementById('root'));\
root.render(\
  <React.StrictMode>\
    <App />\
  </React.StrictMode>\
);

with

ReactDOM.render(\
  <React.StrictMode>\
    <App />\
  </React.StrictMode>,\
  document.getElementById('root')\
);
### `Install react-router-dom@5.2.0`
### `Delete your node_modules and run npm/yarn install`
### `After installation, run npm/yarn start`

