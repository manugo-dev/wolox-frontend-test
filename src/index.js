import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Localization
import { I18nextProvider } from 'react-i18next';
import i18n from 'Locales/locales';

// Context
import UserContextContainer from 'Contexts/UserContext';

// Components
import { ErrorBoundary } from 'Components';

// Main APP Component
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <UserContextContainer>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </UserContextContainer>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
