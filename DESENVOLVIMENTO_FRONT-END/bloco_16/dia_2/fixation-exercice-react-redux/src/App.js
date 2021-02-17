import React from 'react';
import { Provider } from 'react-redux';// o provider é o meio pelo qual disponibilizamos o Store
import store from './store'; 
import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;