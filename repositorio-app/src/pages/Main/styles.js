import styled, {keyframes, css} from 'styled-components';

export const Container  = styled.div`

    max-width: 1000px;
    width: 97%;
    margin: auto;
    min-height: 10px;
    /* outline: 1px solid orange; */
    background-color: #FFF;

    margin-top: 80px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    padding: 10px;

` 

export const ContentMain  = styled.div`

background-color: #FFF;
    max-width: 1000px;
    width: 100%;
    display: flex;

    min-height: 10px;
    /* outline: 1px solid orange; */

    .btn-voltar{
        align-items: center;
        display: flex;
        justify-content: center;
        align-self: center;
        color: #000;
        text-decoration:none;
        font-size: 20px;
        padding-left: 10px;
    }

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
        font-size: ${props =>( props.page == "repositorio" ? "20px" : "30px")}
    }

    ${props => props.page == "repositorio" &&
        css`
        .title{
            justify-content: flex-end;
        }
        `
    }

    .title svg{
        margin-right: 10px;
    }

` 

export const Form  = styled.form`

    display: flex;
    flex-direction: row;


    input{
        width: 100%;
        padding: 15px 20px;
        outline: none;
        border-color: ${props => (
            
            props.error == "vazio" && "red" ||
            props.error == "atencao" && "orange" ||
            props.error == null && "#333"
            
            )};

        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


` 


// Criando animação

const animateButton = keyframes`
    from {
        transform:  rotate(0deg);
    }

    to{
        transform:  rotate(360deg);
    }
`

export const SubmitButton  = styled.button.attrs(props =>({type: 'submit', disabled: props.loading}))`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 20px 20px;
    background-color: #333;
    margin-left: 10px;

    svg{
        color: #FFF;
    }

    &[disabled]{
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${props => props.loading &&
        css`
        svg{
            animation: ${animateButton} 2s linear infinite;
        }
        `
    }


` 

export const List = styled.ul`

    list-style: none;
    border: none;

    li{
        padding: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & + li{
            border-top: 1px solid #333;
        }

        div{
            display: flex;
        }
    
        .name-repo{
            margin-left: 10px;
            font-size: 18px;

        }

        a{
            color: #000;
        }

        svg{
            font-size: 20px;
        }
        
    }


`

export const TitleRepo = styled.h2`

    padding: 20px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DDD;

    svg{
        margin-right: 5px;
        color: ${props => (
            props.color == "vazio" && "red" ||
            props.color == "atencao" && "orange" ||
            props.color == "adicionado" && "green" ||
            props.color == null && "#333"
            
            )}
    }

`

export const DeleteButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;


`

export const Owner = styled.header`
 
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;
        border-radius: 10%;
        margin:  20px 0;
    }

    h1{
        font-size: 30px;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 1.3;
        max-width: 400px;
    }



`

export const Loading =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    height: 100vh;
    color: #FFF;
    
    h1{
        padding-bottom: 10px;
    }

        svg{

            font-size:30px
            animation: ${animateButton} 1.5s linear infinite;
        }

`