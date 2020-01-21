import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';

import Header from './components/Header/header.component.jsx';
import Footer from './components/Footer/footer.component.jsx';

const App = () => (
  <div>
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signin" component={SignInPage} />
  </Switch>
    <Footer />
  </div>
);

export default App;
