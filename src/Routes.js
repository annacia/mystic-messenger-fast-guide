import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ChatTimes = React.lazy(() => import('./pages/ChatTimes'));
const Emails = React.lazy(() => import('./pages/Emails'));

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            <Route exact path='/emails' component={routerProps => <Emails {...routerProps} />} />
            <Route exact path='/chat-times' component={routerProps => <ChatTimes {...routerProps} />} />
            <Route exact path='*' component={routerProps => <NotFound {...routerProps} />} />
        </Switch>
    </Suspense>
)

export default Routes;