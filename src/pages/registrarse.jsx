import { Link } from 'react-router-dom';
import React from 'react';
import { StyleIniciarSesion } from './styles';
import passwordImg from 'assets/img/icons8-bloquear-50.png';
import registrarseImg from 'assets/img/add-friend.png';
import { useAuthentication } from 'pages/auth-context';
import { useFormik } from 'formik';
import userImg from 'assets/img/user.png';
import worldImg from 'assets/img/icons8-world-60.png';
export function Registrarse() {
  const { handleRegisterUser } = useAuthentication();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleRegisterUser(values);
    },
  });

  return (
    <StyleIniciarSesion>
      <main>
        <section className='login'>
          <div className='ingresa'>
            <img src={worldImg} alt='mundo' />
            <h1>Registrarse</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='user'>
              <input
                type='text'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <img src={userImg} alt='username' />
            </div>
            <div className='user'>
              <input
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <img src={passwordImg} alt='password' />
            </div>
            <button className='acept' type='submit'>
              Registrarse
            </button>
            <div className='last'>
              <img src={registrarseImg} alt='ingresar' />
              <Link to='/ingresar'>Iniciar sesion</Link>
            </div>
          </form>
        </section>
      </main>
    </StyleIniciarSesion>
  );
}
