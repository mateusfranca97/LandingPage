import { Container } from "./style";

export function Header(){
    return(
       <Container>
           <h1>MATEUS<text>DEV</text></h1>
           <ul>
               <li><a href="#home">Ínicio</a></li>
               <li><a href="#about">Sobre</a></li>
               <li><a href="#skills">Skills</a></li>
               <li><a href="#section4">Portfólio</a></li>
           </ul>
       </Container> 
    )
}