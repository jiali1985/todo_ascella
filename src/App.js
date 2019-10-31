import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Todo from './pages/Todo';
import AboutMe from './pages/AboutMe';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" >
                                <NavLink activeClassName="active-page-link" exact className="menu-links" to="/">Todo List</NavLink>
                            </Typography>
                            <Typography variant="h6" >
                                <NavLink activeClassName="active-page-link" exact className="menu-links" to="/aboutme">About Me</NavLink>
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Route exact path="/" component={Todo} />
                    <Route path="/aboutme" component={AboutMe} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
