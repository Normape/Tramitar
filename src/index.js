import App from './App';
import { AuthenticationProvider } from './pages/auth-context';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AuthenticationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthenticationProvider>,
  document.getElementById('root'),
);

reportWebVitals();
