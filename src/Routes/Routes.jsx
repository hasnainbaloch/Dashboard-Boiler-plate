import { PrivateRoute, PublictRoute } from "../routes";
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
import { SocketContext } from "../context";

function Routes() {
    return (
        <SocketContext.Consumer>
            { socket => (
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
                        <PrivateRoute path="/dashboard" exact component={Home} socket={socket} />
                        <PrivateRoute path="/dashboard/about" exact component={About} socket={socket}/>
                        
                        {/* Page not-found */}
                        <Route exact path={"*"} component={NotFound} />
                    </Switch>
                </Router>
            )}
        </SocketContext.Consumer>
    );
}

export default Routes;
