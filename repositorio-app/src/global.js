import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height:100%;
    background: #FF0033;
    font-size:14px;
}

input, button{
    font-size:14px;
    color: #222;
}

`