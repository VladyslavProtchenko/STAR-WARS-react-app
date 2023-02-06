import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Character } from "./pages/character";
import { Login } from "./pages/login";
import Movie from "./pages/movie";
import Movies from "./pages/movies";
import Settings from "./pages/settings";
import { fetchMovies } from "./store/moviesSlice";
import Layout from './components/Layout';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>

    <Route index element={<Movies/>}/>
    <Route path='movie/:id' element={<Movie/>}/>
    <Route path='character/:id' element={<Character/>}/>

    <Route path='settings' element={<Settings/>}/>
    <Route path='login' element={<Login/>}/>

  </Route>
))


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchMovies());
  },[])

  return <RouterProvider router={router}/>
}

export default App;
