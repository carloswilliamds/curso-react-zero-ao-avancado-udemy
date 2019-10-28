import React, {useState, useCallback, useEffect} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton} from './styles.js'
import {FaGithub, FaPlus, FaSpinner, FaTrash, FaBars, FaExclamationTriangle, FaCheck} from 'react-icons/fa/'
import api from '../../services/api'
import {Link} from "react-router-dom"

export default function Main(){

    const [newRepo, setNewRepo] = useState("");
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [alert, setAlert] = useState(null);
    const [totalRepo, setTotalRepo] = useState(false)

    const messageErros = {
        "deleted": "Repositorio Deletado!",
        "allDeleted": "Todos Repositórios foram deletados!",
        "vazio": "Preencha  com usuaraio/projeto",
        "conflicted": "Esse repostório já foi adicionado.",
        "networkError": "Sem internet ;(",
        "notfoud": "Repositório não encontrado"
    }

    const messageSuccess = {
        "default": "Adicione seu primeiro repositótio!",
        "cache": "Seus repositorios foram salvos",
        "added": "Respositorio adicionado!",
    }

    function handleInputChange(e){
        setNewRepo(e.target.value)
        setAlert(null)
        setTitle(messageErros.vazio)
        // setTitle(`Você tem ${repositorios.length} ${repositorios.length > 1 ? "repositorios" : "repositorio"} na sua lista`)
    }

    function handleInputBlur(){
        setAlert(null)
        setTitle(`Você tem ${repositorios.length} ${repositorios.length > 1 ? "repositorios" : "repositorio"} na sua lista`)
    }

    const handleDelete = useCallback((repoDelete) =>{
        let find = repositorios.filter(r => r.name !== repoDelete)
        setRepositorios(find);
        localStorage.setItem("repositorios", find);

        try{

            if(repositorios.length <= 1){
                throw new Error(messageErros.allDeleted);
            } else {
                throw new Error(messageErros.deleted)
            }
        }catch(error){
            setTitle(error.message)
            if(error.message == messageErros.deleted){
                setTotalRepo(true)
                setAlert(null)

            }

        }
  

    },[repositorios])

    //carregar repopsitorios salvados
    const localRepo = localStorage.getItem("repositorios");
    useEffect(() =>{
 
        console.log(localRepo)
        if(localRepo){
            setRepositorios(JSON.parse(localRepo))
            setTitle(messageSuccess.cache)
    

        
        }else{
            setTitle(messageSuccess.default)
  
     
  
        }
    },[])




    // Salvar e alterar
    useEffect(() =>{
        let repo = JSON.stringify(repositorios);

        if(repositorios != false){
            localStorage.setItem("repositorios", repo);
        }

    },[repositorios])

    // mostra o total de repositorios
    useEffect(() =>{
        if(localRepo){
            setTimeout( () =>{
                setTitle(`Você tem ${repositorios.length} ${repositorios.length > 1 ? "repositorios" : "repositorio"} na sua lista`) 
                setAlert(null)
            }, 2000)

        }
        
    }, [repositorios, totalRepo]) 

   const handleSubmit =  useCallback(

    (e) => {

            e.preventDefault();
            setLoading(true);

                async function handleSubmitCallback(){
                    try{

                        if(newRepo == ""){
                            throw new Error(messageErros.vazio);
                        }
                    
                    let hasRepo =  repositorios.find(r => r.name === newRepo);
                    
                        if(hasRepo){
                            throw new Error(messageErros.conflicted)
                        }
                    const response =  await api.get(`repos/${newRepo}`).catch((a) =>{
                      
                        console.log(a.message)

                        if(a.message == "Network Error"){
                            
                            throw new Error(messageErros.networkError)
                        }

                        if(a.message == "Request failed with status code 404"){
               
                            throw new Error(messageErros.notfoud)
                        }
                           
                    })

                    const data =  {
                        name: response.data.full_name,
                    }

                    setRepositorios([...repositorios, data])         
                    setNewRepo("")
                    setTitle(messageSuccess.added)
                    setAlert("adicionado")
    
                    setTotalRepo(true)

                    

                } catch(error){
                    console.log(error.message)
                    setTitle(error.message)
                    if(error.message == messageErros.vazio){
                        setAlert("vazio");
                    } else if(error.message == messageErros.conflicted){
                        setAlert("atencao");
                    } else if (error.message == messageErros.networkError){
                        setAlert("atencao")
                    } else if (error.message ==  messageErros.notfoud){
                        setAlert("vazio")
                    }
                   
                } finally{
                    setLoading(false);
                }

            }

            handleSubmitCallback()
        },
        [setRepositorios, newRepo, repositorios] // acredito que nao preciso do setRepo...
        )

    return(
        <Container>
            <ContentMain>
                <h1 className="title"><FaGithub />Repositórios</h1>
            </ContentMain>

            <Form onSubmit={(e) =>{handleSubmit(e)}} error={alert}>
                <input
                 type="text" 
                 placeholder="Adicionar Repositorios"
                 value={newRepo}
                 onChange={handleInputChange}
                 onBlur={handleInputBlur}
                 onFocus={handleInputChange}
                 
                 />
                <SubmitButton loading={loading ? 1 : 0}>

                    {loading ? 
                    <FaSpinner> </FaSpinner>
                    :
                    <FaPlus> </FaPlus>
                    }
                </SubmitButton>
            </Form>

            <TitleRepo color={alert}>
                    {alert === "vazio" && 
                    <FaExclamationTriangle ></FaExclamationTriangle>  ||
                     alert === "atencao" &&
                     <FaExclamationTriangle ></FaExclamationTriangle>  ||
                     alert === "adicionado" &&
                     <FaCheck></FaCheck>

                    }
                    {title}

            </TitleRepo>

                { repositorios.length > 0 &&
                <List>
                    {repositorios.map(repo => (
   
                        <li key={Math.random()}>

                            <div>
                            <DeleteButton onClick={() =>{ handleDelete(repo.name)}}>
                                <FaTrash></FaTrash>
                            </DeleteButton>
                            <span className="name-repo">{repo.name}</span>
                            </div>
                            <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                                <FaBars></FaBars>
                            </Link>
                          
                        </li>
                    ))}
                </List>
                 }  
        </Container>
    )
}

