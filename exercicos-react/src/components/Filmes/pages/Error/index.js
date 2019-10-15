import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Error extends Component{
    
    render(){ 
        return(
            <div>
                <h1>Pagina não Econtrada</h1>
                <Link to="/">Voltar para Home</Link>
            </div>
        );
    }

}

export default Error