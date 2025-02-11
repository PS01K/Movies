import { useEffect, useState } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './components/Home';

function App() {
  useEffect(() => {
    // fetchDataFromApi("/movie/11", {})
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  });

  return (
    <>
      <Provider store={store}>
        <h1>Movies App</h1>  
        <Home />
      </Provider>      
    </>
  )
}

export default App
