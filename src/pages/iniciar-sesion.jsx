import { Link } from 'react-router-dom';
import React from 'react';
import { StyleIniciarSesion } from './styles';
import passwordImg from 'assets/img/icons8-bloquear-50.png';
import registrarseImg from 'assets/img/add-friend.png';
import { useAuthentication } from './auth-context';
import { useFormik } from 'formik';
import userImg from 'assets/img/user.png';
import worldImg from 'assets/img/icons8-world-60.png';

export function IniciarSesion() {
  const { login } = useAuthentication();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      login(email, password);
    },
  });

  return (
    <StyleIniciarSesion>
      <main>
        <section className='login'>
          <form onSubmit={formik.handleSubmit}>
            <div className='ingresa'>
              <img src={worldImg} alt='' />
              <h1>Ingresar</h1>
            </div>
            <div className='user'>
              <input
                type='text'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <img src={userImg} alt='' />
            </div>
            <div className='user'>
              <input
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <img src={passwordImg} alt='' />
            </div>
            <button className='acept' type='submit'>
              Login
            </button>
            <div className='last'>
              <img src={registrarseImg} alt='' />
              <Link to='/registrarse'>Registrarse</Link>
            </div>
          </form>
        </section>
      </main>
    </StyleIniciarSesion>
  );
}
