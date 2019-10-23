import styled from 'styled-components';

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


export const SubmitButton  = styled.button.attrs({type: 'submit'})`
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


` 