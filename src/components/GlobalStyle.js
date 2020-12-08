import { createGlobalStyle } from "styled-components";
// I can nest like in SASS if I want too 


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }   
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden; //so theres no left/right scroll

}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #e0b336;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;

    &:hover{
        background-color: #e0b336;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #e0b336;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;