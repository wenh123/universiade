import PropTypes from 'prop-types';
import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Root from './containers/RootContainer';


const propTypes = {
  match: PropTypes.object.isRequired,
};

const route = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:sport`} component={Root} />
    <Redirect to={`${match.url}/全部?date=${(new Date()).toJSON().substr(0, 10)}`} />
  </Switch>
);

route.propTypes = propTypes;

export default route;
