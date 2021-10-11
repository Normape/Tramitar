import { Link, Redirect, useHistory } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';

import { StyleIniciarSesion } from './styles';
import contactImg from 'assets/img/contact.png';
import { firestore } from 'utils/firebase';
import glassImg from 'assets/img/magnifying-glass.png';
import linkedInImg from 'assets/img/linkedin.png';
import nextImg from 'assets/img/next.png';
import twitterImg from 'assets/img/twitter.png';
import { useAuthentication } from 'pages/auth-context';
import youtubeImg from 'assets/img/icons8-youtube-play-64.png';

export function Inicio() {
  const { isAuthenticated, logout } = useAuthentication();
  const [tramites, setTramites] = useState(null);
  const [consulta, setConsulta] = useState('');
  const history = useHistory();

  const filtro = useMemo(() => {
    return tramites?.filter((tramites) =>
      tramites.name.toLowerCase().includes(consulta.toLowerCase()),
    );
  }, [consulta, tramites]);

  useEffect(() => {
    if (!isAuthenticated) {
      return <Redirect to='/ingresar' />;
    }

    firestore.collection('tramites').onSnapshot((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) =>
        products.push({ id: doc.id, ...doc.data() }),
      );
      setTramites(products);
    });
  }, [isAuthenticated]);

  return (
    <StyleIniciarSesion>
      <nav>
        <div className='nav-container2'>
          <ul className='list-container2'>
            <li className='item-container2'>
              <Link to='#'>Mis tramites</Link>
            </li>
            <li className='item-container2'>
              <Link to='#'>Encuestas</Link>
            </li>
            <li className='item-container2'>
              <Link to='#' onClick={() => logout()}>
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className='anuncio-container' style={{ marginTop: '700px' }}>
          <div className='anuncio'>
            <h1>Bienvenido</h1>
            <p>
              Si es tu primera vez en la pagina, te recomendamos dar un vistazo
              a nuestro tutorial
            </p>
            <p>Podras usar al maximo nuestros beneficios.</p>
          </div>
          <div className='search'>
            <span>
              <input
                type='search'
                name='consulta'
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
              />
              <img src={glassImg} alt='' />
            </span>
            <div className='options'>
              {!filtro ? 'Cargando...' : ''}
              {filtro?.map((tramite) => (
                <button
                  key={tramite.id}
                  className='option-1'
                  onClick={() => history.push(`/tramites/${tramite.id}`)}
                >
                  {tramite.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className='aside'>
          <section className='tutorial'>
            <h2>Tutorial</h2>
            <iframe
              width='450'
              height='170'
              src='https://www.youtube.com/embed/ELhgOL_FIdU'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </section>
          <section className='contactanos'>
            <h2>
              <img src={contactImg} alt='' /> Contactanos
            </h2>
            <p>Tel: 1234567</p>
            <p>e-mail: ejemplo@tutramite.com</p>
          </section>
          <section className='comparte'>
            <h2>
              <img src={nextImg} alt='' /> Comparte
            </h2>
            <ul className='social'>
              <li className='social-item'>
                <img src={linkedInImg} alt='' />
                <Link to='#'>LinkedIn</Link>
              </li>
              <li className='social-item'>
                <img src={twitterImg} alt='' />
                <Link to='#'>Twitter</Link>
              </li>
              <li className='social-item'>
                <img src={youtubeImg} alt='' />
                <Link to='#'>Youtube</Link>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </StyleIniciarSesion>
  );
}
