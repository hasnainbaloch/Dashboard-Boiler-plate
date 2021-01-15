import { PrivateRoute, PublictRoute } from ".";
import { 
    Landing, 
    Home, 
    About, 
    NotFound, 
    Login 
} from '../components/Pages'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function Routes() {
    return (
        <Router>
            <Switch>

            {/* Redirect to landing Layout   */}
            <Route path="/" exact>
                <Redirect to="/landing" />
            </Route>
            
            {/* Landing Layout with public route  */}
            <PublictRoute path="/landing" exact component={Landing} />
            <PublictRoute path="/login" exact component={Login} />
            
            {/* Dashboard Layout  with private route  */}
            <PrivateRoute path="/dashboard" exact component={Home} />
            <PrivateRoute path="/dashboard/about" exact component={About} />
            
            {/* Page not-found */}
            <Route exact path={"*"} component={NotFound} />
            
            </Switch>
        </Router>
    );
}

export default Routes;
