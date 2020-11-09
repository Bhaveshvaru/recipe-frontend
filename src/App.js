import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import RecipeForm from './components/RecipeForm';
import Search from './components/Search';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/AddRecipe" component={RecipeForm} />
          <Route path="/Search" component={Search} />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;