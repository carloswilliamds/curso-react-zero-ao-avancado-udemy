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

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
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

`

export const DeleteButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;


`