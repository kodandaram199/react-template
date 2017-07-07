import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './Application';
import Home from './Application/components/pages/Home';
import About from './Application/components/pages/About';
import Contact from './Application/components/pages/Contact';
import Company from './Application/components/pages/Company';
import Partner from './Application/components/pages/Partner';
import Terms from './Application/components/pages/Terms';

const Routes = (props) => (
 <Router {...props}>
     <Route path="/" component={App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
         <Route path = "company" component = {Company} />
         <Route path = "partner" component = {Partner} />
         <Route path = "terms" component = {Terms} />
     </Route>
 </Router>
);
export default Routes;