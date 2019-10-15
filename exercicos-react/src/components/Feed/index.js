import React, { Component } from "react"

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            curtidas: this.props.curtidas
        }
        this.curtir = this.curtir.bind(this);

    }


    curtir(){
        console.log(this.state.curtidas);
        this.setState({
            curtidas: this.state.curtidas += 1
        })

    }
    
    render(){
        return(
        <div>
            <h1>{this.props.nome}</h1>
            <h3>{this.state.curtidas > 1 ? this.state.curtidas + " Curtidas" : this.state.curtidas + " Curtida"}</h3>
            <h3>{this.props.comentarios > 1 ? this.props.comentarios + " Comentarios" : this.props.comentarios + " Comentario"}</h3>
            <button onClick={this.curtir}>Like</button>
            <hr />
        </div>  
        );
    }

}

export default Feed