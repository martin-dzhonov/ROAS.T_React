import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen'
import ContactsScreen from '../screens/ContactsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'
import Header from '../components/Header'
import {PrivateRoute} from '../utils/PrivateRoute'

const Routes = () => (
  <BrowserRouter> 
      <Header />
      <Route path="/" exact component={HomeScreen}/> 
      <Route path="/home" exact component={HomeScreen}/> 
      <Route path="/login" exact component={LoginScreen}/> 
      <Route path="/contacts" exact component={ContactsScreen}/> 
      <PrivateRoute path="/profile" exact component={ProfileScreen}/> 
      </BrowserRouter>
);

export default Routes;