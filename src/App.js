import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/signin" component={SignInPage} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// };

// export default App;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
