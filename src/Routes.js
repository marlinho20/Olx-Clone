import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignEn from './pages/SignEn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import MyAccount from './pages/MyAccount';

const Routes = () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>
            <RouteHandler exact path="/signin">
                <SignEn />
            </RouteHandler>
            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler private path="/my-account">
                <MyAccount />
            </RouteHandler>
            <RouteHandler private path="/post-an-ad">
                <AddAd />
            </RouteHandler>
            <RouteHandler exact path="/ads">
                <Ads />
            </RouteHandler>
            <RouteHandler path="*">
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}

export default Routes;