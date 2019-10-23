import React, {useState} from "react";
import {Container, ContentMain, Form, SubmitButton} from './styles.js'
import {FaGithub, FaPlus} from 'react-icons/fa/'
import api from '../../services/api'

export default function Main(){

    const [newRepo, setNewRepo] = useState("");
    const [repositorios, setRepositorios] = useState([])

    function handleInputChange(e){
        setNewRepo(e.target.value)
    }

    async function handleSubmit(e){

        e.preventDefault();

        const response = await api.get(`repos/${newRepo}`)
        console.log(response)


    }

    return(
        <Container>
            <ContentMain>
                <h1 className="title"><FaGithub />Repositorios</h1>
            </ContentMain>

            <Form onSubmit={() =>{}}>
                <input
                 type="text" 
                 placeholder="Adicionar Repositorios"
                 value={newRepo}
                 onChange={handleInputChange}
                 
                 />
                <SubmitButton onClick={handleSubmit}>
                    <FaPlus> </FaPlus>
                </SubmitButton>
            </Form>
        </Container>
    )
}

