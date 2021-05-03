import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import MenuListView from './MenuListView';
import MenuByIdView from './MenuByIdView';

const MenuRouter = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []);
  return (
    <div>
      <Switch>
        <Route path={match.url} component={MenuListView} />
        <Route path={`${match.url}/:id`} component={MenuByIdView} />
      </Switch>
    </div>
  );
};

MenuRouter.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
export default MenuRouter;
