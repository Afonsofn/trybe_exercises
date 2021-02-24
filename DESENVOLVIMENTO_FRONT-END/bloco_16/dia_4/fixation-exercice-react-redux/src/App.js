import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './actions';

function App({ isFetching, src, fetchDog }) { // Aqui recuperamos o src da img do dog, o valor do isFetching pra fazer a lógica do loading *continua* 
  return (  //e recuperamos também o nosso dispatch para ser disparado quando clicarmos no botão de Novo Doguinho.
    isFetching ? <p>Loading</p> // Aqui temos a lógica da renderização do loading que vem do fetch do reducer, enquando a requesição ainda não é resolvida o loading aparece na tela.
      : ( // quando a promise é resolvida mostramos a foto do dog.
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching}); // Recuperando o valor do isFetching do store para fazer a lógica do loading.

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);