import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../src/style/App.css'
import Header from './componentes/header/Header'
import Home from './componentes/pages/Home'
import Posts from './componentes/pages/Posts'
import Footer from './componentes/footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path="/posts/:id"component={Posts}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
