import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'

import { Login } from './pages/Login/Login';
import { Account } from './pages/Login/Account';
import { Layout } from './components/layout/Layout';

import { AuthProvider } from './hooks/hoc/AuthProvider';
import { RequireAuth } from './hooks/hoc/requireAuth';
import { filmLoader } from './pages/Movie/loader';
import { characterLoader } from './pages/Character/loader';
import { movieLoader } from './pages/Movies/loader';
import { MoviesAxios } from './pagesAxios/MoviesAxios/MoviesAxios';
import { MovieAxios } from './pagesAxios/MovieAxios/MovieAxios';
import CharacterAxios from './pagesAxios/Character/Character';
import Error from './pagesAxios/Error';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { Movie } from './pages/Movie/Movie';
import { Character } from './pages/Character/Characters';
import { About } from './pages/About/About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
      <Route path='movie' element={<Movies/>} loader={movieLoader}/>
      
      <Route path='movie/:id' element={
          <Movie />
      }  loader={filmLoader}/>

      <Route path='movie/character/:id' element={
          <Character />
      
      } loader={characterLoader}/>

      <Route path='axios' element={<MoviesAxios/>} errorElement={<Error/>}/>
      <Route path='axios/:id' element={<MovieAxios/>} errorElement={<Error/>}/> 
      <Route path='axios/character/:id' element={<CharacterAxios/>} errorElement={<Error/>}/> 

      <Route path='about-us' element={<About/>} />
      <Route path='authorization' element={<Login/>} />
      
      <Route path='login' element={
        <RequireAuth>
          <Account/>
        </RequireAuth>
      } />
    </Route>          
))

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}

export default App;
