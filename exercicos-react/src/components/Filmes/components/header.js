import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <Link to="/"><h1>Filmes React.js</h1></Link>

            </header>
        );
    }
}

export default Header