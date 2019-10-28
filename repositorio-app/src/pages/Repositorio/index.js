import React, {Component} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton} from '../../pages/Main/styles.js';
import {Link} from "react-router-dom";


export default function Repositorio({match}){
    console.log(match.params.repositorio)
    return(
        <Container>
            <ContentMain>
            <Link to="/" className="btn-voltar">Voltar</Link>
                        <h1 className="title"><span>{decodeURIComponent(match.params.repositorio)}</span></h1>
            </ContentMain>
        </Container>
    )
}

