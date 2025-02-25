import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css'
import { store } from './redux/store';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/:entityType/:id",
      element: <MovieDetails />
    }
  ])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>      
    </>
  )
}

export default App
