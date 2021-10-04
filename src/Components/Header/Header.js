// import { Typography, withStyles } from '@mui/material';
import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom';
import About from '../About/About';
import Catagory from '../Catagory/Catagory';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import "./Header.css";

const Header = () => {
    const WhiteTextTypography = withStyles({
        root: {
            padding: "20px",
            backgroundColor:"#e57373"
        }
    })(Typography);
    return (
        <div>
            <BrowserRouter>
                <WhiteTextTypography>
                <Link className="link-style" to="/home">Home</Link>
                <Link className="link-style" to="/courses">Courses </Link>
                <Link className="link-style" to="/catagory">Catagory</Link>
                <Link className="link-style" to="/about">About</Link>
                </WhiteTextTypography>
                <div>
                <h1>Programming Point</h1>
            </div>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/courses">
                    <Courses></Courses>
                    </Route>
                    
                    <Route path="/catagory">
                        <Catagory/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                    <NotFound/>
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Header;