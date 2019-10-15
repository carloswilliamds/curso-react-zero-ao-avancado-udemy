import React, {Component} from "react"
import Feed from "./components/Feed"


class Appfeed extends Component{

        constructor(props){
            super(props);
            this.state = {
                feed: [
                    {id: 1, usarname: "Carlos", curtidas: 20, comentarios: 3},
                    {id: 2, usarname: "Jake Janeiro", curtidas: 22, comentarios: 13},
                    {id: 3, usarname: "Mr. F", curtidas: 1, comentarios: 1}
                ]
            }
        }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return(
                        <div key={item.id}>
                            <Feed id={item.id} nome={item.usarname} curtidas={item.curtidas} comentarios={item.comentarios} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Appfeed