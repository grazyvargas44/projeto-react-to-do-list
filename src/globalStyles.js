import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
 }

 * {
   font-family: "Roboto", sem serifa;
}


`

export default GlobalStyles