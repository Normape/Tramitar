import styled from 'styled-components';

const StyleIniciarSesion = styled.div`
  .anuncio {
    width: 80%;
    height: 200px;
    text-align: center;
    padding-left: 10px;
    justify-content: end;
  }

  .anuncio h1 {
    border-bottom: 2px solid #0568d8;
    font-size: 4rem;
  }

  .anuncio p {
    padding-top: 15px;
    font-size: 1.3rem;
    text-align: justify;
  }

  .search {
    width: 80%;
    height: 200px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .search img {
    width: 25px;

    margin-left: -40px;
    margin-bottom: -8px;
  }
  .search input {
    width: 450px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #0568d8;
    padding-left: 30px;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .options {
    width: 80%;
    padding-top: 30px;
    display: flex;
    justify-content: space-around;
  }

  .option-1 {
    padding: 20px;
    border: 1px solid #0568d8;
    border-radius: 30px;
  }

  .option-1 a {
    text-decoration: none;
    color: black;
  }

  .option-1:hover {
    background-color: #0568d8;
    border: 1px solid grey;
    box-shadow: 5px 5px 5px #0568d8;
  }

  .option-1 a:hover {
    color: white;
  }
  main {
    display: flex;
    width: 100%;
  }

  .aside {
    width: 70%;
    height: 750px;

    display: flex;
    flex-direction: column;
  }

  .tutorial {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .tutorial h2 {
    height: 50px;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
  }

  .contactanos {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .contactanos img {
    width: 40px;
  }
  .comparte {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .comparte h2 {
    margin-bottom: 20px;
  }

  .comparte img {
    width: 35px;
  }
  .comparte .social {
    text-decoration: none;
  }
  .social-item a {
    text-decoration: none;
    list-style: none;
    margin: 15px;
    color: #0568d8;
  }

  .social .social-item {
    list-style: none;
  }
  .social img {
    width: 25px;
  }

  .ingreso {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }
  main {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main img {
    width: 20px;
  }

  .login {
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #0568d8;
    border-radius: 10px;
    box-shadow: 3px 3px 0px #0568d8;
  }

  .ingresa {
    width: 100%;
    display: flex;
    margin-top: -100px;
    justify-content: center;
    padding: 30px;
  }
  .ingresa h1 {
    font-size: 1.8rem;
  }

  .ingresa img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }

  .user {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
    padding-left: 20px;
    padding-bottom: 23px;
  }

  .user img {
    width: 20px;
    height: 20px;
    margin-left: 270px;
    margin-top: -30px;
  }

  .user input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #0568d8;
    box-shadow: 1px 1px 5px #0568d8;
    padding: 17px;
  }

  .acept {
    width: 150px;
    height: 35px;
    font-size: 1rem;
    color: white;
    background-color: #0568d8;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 1px 1px 5px #0568d8;
    margin-bottom: 10px;
  }

  .last {
    width: 100%;
    height: 10px;
    display: flex;
    padding: 11px;

    justify-content: center;
    align-items: flex-start;
  }
  .last img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const StyleRegistrase = styled.div`
  .anuncio {
    width: 80%;
    height: 200px;
    text-align: center;
    padding-left: 10px;
    justify-content: end;
  }

  .anuncio h1 {
    border-bottom: 2px solid #2e5ef4;
    font-size: 4rem;
  }

  .anuncio p {
    padding-top: 15px;
    font-size: 1.3rem;
    text-align: justify;
  }

  .search {
    width: 35%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
  }
  .search img {
    width: 25px;
    margin-left: -40px;
    margin-bottom: -8px;
  }
  .search input {
    width: 300px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #0568d8;
    padding-left: 30px;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 600px;

    justify-content: space-around;
  }

  .aside {
    width: 100%;
    height: 400px;
    display: flex;
  }

  .requisitos {
    width: 120%;
    height: 400px;
    background-color: #0568d8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .requisitos h3 {
    width: 100%;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    font-size: 1.5rem;
  }

  .requisitos div {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 300px;
    background-color: white;
    border: 2px solid #cfd2d6;
    border-radius: 10px;
  }

  .requisitos img {
    width: 40px;
    margin-left: 100px;
    justify-content: end;
  }

  .info {
    width: 100%;
    height: 500px;
    background-color: #0568d8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: -98px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .info p {
    width: 100%;
    color: #0568d8;
    text-align: center;
    font-size: 1.2rem;
  }

  .info .bombo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 150px;
    background-color: white;
    border: 2px solid #cfd2d6;
    border-radius: 10px;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .info .bombo2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 150px;
    background-color: white;
    border: 2px solid #cfd2d6;
    border-radius: 10px;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .tramites {
    width: 100%;
    margin-left: 20px;
    height: 600px;
    display: flex;
    flex-direction: column;
    background-color: #0568d8;
    margin-top: -150px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .box {
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 30px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #0568d8;
  }

  .box p {
    font-size: 1.1rem;
    color: #0568d8;
  }
`;

const StyleInicio = styled.div`
  .anuncio {
    width: 80%;
    height: 200px;
    text-align: center;
    padding-left: 10px;
    justify-content: end;
  }

  .anuncio h1 {
    border-bottom: 2px solid #0568d8;
    font-size: 4rem;
  }

  .anuncio p {
    padding-top: 15px;
    font-size: 1.3rem;
    text-align: justify;
  }

  .search {
    width: 95%;
    height: 200px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .search img {
    width: 25px;

    margin-left: -40px;
    margin-bottom: -8px;
  }
  .search input {
    width: 450px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #0568d8;
    padding-left: 30px;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .options {
    width: 80%;
    padding-top: 30px;
    display: flex;
    justify-content: space-around;
  }

  .option-1 {
    padding: 20px;
    border: 1px solid #0568d8;
    border-radius: 30px;
  }

  .option-1 a {
    text-decoration: none;
    color: black;
  }

  .option-1:hover {
    background-color: #0568d8;
    border: 1px solid grey;
    box-shadow: 5px 5px 5px #0568d8;
  }

  .option-1 a:hover {
    color: white;
  }
  main {
    display: flex;
    width: 100%;
  }

  .aside {
    width: 70%;
    height: 750px;

    display: flex;
    flex-direction: column;
  }

  .tutorial {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .tutorial h2 {
    height: 50px;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
  }

  .contactanos {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .contactanos img {
    width: 40px;
  }
  .comparte {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }

  .comparte h2 {
    margin-bottom: 20px;
  }

  .comparte img {
    width: 35px;
  }
  .comparte .social {
    text-decoration: none;
  }
  .social-item a {
    text-decoration: none;
    list-style: none;
    margin: 15px;
    color: #0568d8;
  }

  .social .social-item {
    list-style: none;
  }
  .social img {
    width: 25px;
  }

  .ingreso {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 2px solid #0568d8;
    background-color: white;
    color: #0568d8;
    align-items: center;
    border-radius: 40px;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 1px 1px 10px #0568d8;
  }
`;

export { StyleIniciarSesion, StyleRegistrase, StyleInicio };
