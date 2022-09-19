import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import './index.css';
import App from './App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import i18n from 'i18n';
import { createRoot } from 'react-dom/client';
import AuthProvider from 'providers/AuthenticationProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from 'reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AuthProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
serviceWorker.unregister();
