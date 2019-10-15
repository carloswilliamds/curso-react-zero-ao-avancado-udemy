import React, {Component} from 'react';


class Filme extends Component {
    constructor(props){
        super(props);
        this.state = {
            filme: []
        };
                
    }

    componentDidMount(){
       const {ok} = this.props.match.params;
       let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${ok}`

       console.log(ok, url);

       fetch(url).then((r) => r.json()).then((json) => {
           this.setState({
            filme: json
           })
       })

    }

    render(){
        return(
            <div className="lista-filmes">
                <article>
                    <h2>{this.state.filme.nome}</h2>
                    <img src={this.state.filme.foto}/>
                    { this.state.filme.length !== 0 && 
                        <h3>Sinopse</h3>
                    }
                    <p>
                        {this.state.filme.sinopse}
                    </p>
                </article>
            </div>
        );
    }
}

export default Filme