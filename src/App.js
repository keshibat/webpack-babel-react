import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import PrivateRoute from './components/routes/PrivateRoute';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/free" component={HomePage} />
        <PrivateRoute path="/sample" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
