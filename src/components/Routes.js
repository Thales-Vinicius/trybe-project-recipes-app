import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Drinks from '../pages/Drinks';
import DrinksDetails from '../pages/DrinksDetails';
import DrinksInProgress from '../pages/DrinksInProgress';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreDrinksByIngredient from '../pages/ExploreDrinksByIngredient';
import ExploreFoodByIngredient from '../pages/ExploreFoodByIngredient';
import ExploreLocalOrigin from '../pages/ExploreLocalOrigin';
import ExploreMeals from '../pages/ExploreMeals';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Meals from '../pages/Meals';
import MealsDetails from '../pages/MealsDetails';
import MealsInProgress from '../pages/MealsInProgress';
import Profile from '../pages/Profile';
import RecipesMade from '../pages/RecipesMade';
import NotFound from '../pages/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route
          exact
          path="/comidas/:id"
          component={ MealsDetails }
        />
        <Route exact path="/bebidas/:id" component={ DrinksDetails } />
        <Route
          exact
          path="/comidas/:id/in-progress"
          component={ MealsInProgress }
        />
        <Route
          exact
          path="/bebidas/:id/in-progress"
          component={ DrinksInProgress }
        />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreMeals } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodByIngredient }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksByIngredient }
        />
        <Route exact path="/explorar/comidas/area" component={ ExploreLocalOrigin } />
        <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />

      </Switch>
    );
  }
}

export default Routes;
