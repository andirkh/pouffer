// ROOT OF THIS APP
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components here
import App from './components/App';
import Home from './components/Home';
import Progress from './components/Progress';
import Tentang from './components/Tentang';
import Dokumentasi from './components/Dokumentasi';
import Tutorial from './components/Tutorial';
// Bercanda here
import NotFound from './components/NotFound';
import WpAdmin  from './components/WpAdmin';
// Styles here
import './styles/index.css';

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}> </IndexRoute>
        <Route path="about" component={Tentang} />
        <Route path="docs" component={Dokumentasi} />
        <Route path="progress" component={Progress} />
        <Route path="tutorial" component={Tutorial} />
        <Route path="wp-admin" component={WpAdmin} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('openpouffer-root')
);
