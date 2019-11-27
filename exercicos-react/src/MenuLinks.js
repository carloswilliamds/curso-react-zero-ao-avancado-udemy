import React from "react"
import { Link } from "react-router-dom"
import styled  from "styled-components"

const Header = styled.header`

    background: #FFF;
    display: flex;
    justify-content: center;

    h1{
        cursor: pointer;

        margin-bottom: 0;
    }

    div{
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        cursor: pointer;

        justify-content: center;

        ul {
            display: flex;
            list-style: none;
            flex-wrap: wrap;
            cursor: pointer;


            li{
                margin-top: 5px;
                    cursor: pointer;
                padding-left: 10px;
                
                a{
                    color: #333;
                    cursor: pointer;
               
                    :hover{
                        color: #999;
                    }
                }

            }

        }
    }
`

export default () => {
    return(
        <>
        <Header>
            <div>
                <h1>Exercícios do Curso React do Zero ao Avançado</h1>
                <ul>
                    <li><Link to="biscoito">Biscoito</Link></li>
                    <li><Link to="cronometro">Cronometro</Link></li>
                    <li><Link to="filmes">Página com Rotas</Link></li>
                    <li><Link to="pagejson">Página com JSON</Link></li>
                    <li><Link to="todolist">Todolist</Link></li>
                    <li><Link to="hooks">Usando Hooks</Link></li>
                </ul>
            </div>
        </Header>
        </>
    )
}