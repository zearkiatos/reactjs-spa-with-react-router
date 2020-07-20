import React from 'react';
import { Router } from './router'
import { Home } from './components/HomeComponent'

  
  // Set up pages using the React Router Link element for navigation - instead of <a></a>
  export const App = () => (
      <Home>
          <Router />
      </Home>
  )
