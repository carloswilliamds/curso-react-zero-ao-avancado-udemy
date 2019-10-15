import React, { Component } from 'react'
import './style.css'

class Pagejson extends Component {

    constructor(props){
        super(props);
        this.state = {};

    }

    render(){
        return(
    
                <Articles url="https://sujeitoprogramador.com/rn-api/?api=posts" />
       
        );
    }
}

class Articles extends Component{

    constructor(props){
        super(props);
        this.state = {
            artigos: []
        }
    }


    componentDidMount(){
        let urlnew = this.props.url;

        fetch(urlnew)
        .then((r) => {
            
            return r.json()
        
        })
        .then((json) => {
            console.log(json);

            this.setState({
                artigos: json
            })
        })
        console.log(urlnew);

    }


    render(){
        return(
            <div className="container-artigos">
                {this.state.artigos.map((item) => {
                    console.log(item.length);
                    return(
                        
                        <article  key={item.id} className="artigo">
                            <h4 className={item.categoria}>{item.categoria}</h4>
                            <h1>{item.titulo}</h1>
                            <img src={item.capa} alt="capa" />
                            <p>{item.subtitulo}</p>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Pagejson