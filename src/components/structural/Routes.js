import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from '../shared/PrivateRoute';

// Public routes
import HomeContainer from '../pages/home/HomeContainer';
import SignUpContainer from '../pages/sign-up/SignUpContainer';

// Private routes
import FeelingsContainer from '../pages/feelings/FeelingsContainer';
import FeelingsTimeline from '../pages/feelings-timeline/FeelingsTimeline';
import SubjectTimeline from '../pages/feelings-timeline/SubjectTimeline';

const Routes = ({ user }) => (
  <React.Fragment>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/sign-up" component={SignUpContainer} />

    <PrivateRoute
      path="/feelings"
      component={FeelingsContainer}
      user={user}
    />
    <Route
      path="/feelings-timeline"
      component={FeelingsTimeline}
      user={user}
    />
    <Route
      path="/subject-timeline"
      component={SubjectTimeline}
      user={user}
    />
  </React.Fragment>
);

export default Routes;
