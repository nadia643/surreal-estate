import '../styles/app.scss';
import React from 'react';
import NavBar from './nav-bar';
import AddPropertyPage from './add-property';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddPropertyPage} />
      </Switch>
    </div>
  );
};
export default App;
