import React from 'react'

const AddCategory = React.lazy(() => import('./views/pages/Category/AddCategory'))
const Categories = React.lazy(() => import('./views/pages/Category/Categories'))
const AddMovies = React.lazy(() => import('./views/pages/Movies/AddMovies'))
const MovieList = React.lazy(() => import('./views/pages/Movies/MovieList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
 
  { path: '/Category/AddCategory', name: 'AddCategory', element: AddCategory },
  { path: '/', name: 'Categories', element: Categories },
  { path: '/Movies/AddMovies', name: 'AddMovies', element: AddMovies },
  { path: '/Movies/MovieList', name: 'MovieList', element: MovieList },




]

export default routes
