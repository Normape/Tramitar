import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom';

import { IniciarSesion } from './pages/iniciar-sesion';
import { Inicio } from './pages/inicio';
import React from 'react';
import { Registrarse } from './pages/registrarse';
import { useAuthentication } from 'pages/auth-context';

function UsuarioAnonimo() {
  return (
    <>
      <Route path='/registrarse'>
        {' '}
        <Registrarse />{' '}
      </Route>
      <Route path={['/', 'ingresar']}>
        <IniciarSesion />{' '}
      </Route>
    </>
  );
}

function Trabajando() {
  const history = useHistory();

  return (
    <div style={{ margin: '1em ' }}>
      <h1>Estamos trabajando para darle la mejor experiencia...</h1>
      <p>Que tenga un excelente día!</p>
      <button
        onClick={() => history.goBack()}
        style={{
          margin: '1em',
          padding: '.5em 1em',
          background: '#0568d8',
          borderRadius: '5px',
          color: '#fff',
          border: 'none',
        }}
      >
        Ir atrás
      </button>
    </div>
  );
}

function App() {
  const { isAuthenticated } = useAuthentication();

  return (
    <div>
      <Router>
        <div>
          <Switch>
            {isAuthenticated && (
              <>
                <Route exact path='/tramites/:id'>
                  <Trabajando />
                </Route>
                <Route exact path={['/', '/tramites']}>
                  <Inicio />
                </Route>
              </>
            )}
            {!isAuthenticated && <UsuarioAnonimo />}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
