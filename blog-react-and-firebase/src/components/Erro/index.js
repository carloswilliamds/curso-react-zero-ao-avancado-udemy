import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {

    render(){
        return(
            <section className="page-erro">
                <div className="container">
                    <h1><Link to="/">Voltar para Home</Link></h1>
                </div>
            </section>
        )
    }
}

export default Home