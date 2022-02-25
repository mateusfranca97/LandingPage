import { Container } from "./style";


export function Main(){
    return(
        <Container>
            <div className="home">
                <div className="header">
                    <h1>Olá, Meu nome é <br/><span>Mateus</span></h1>
                </div>
            </div>
            <div className="about">
                <div className="text">
                    <h1>Sobre</h1>
                    <text>
                        Estou começando minha carreira como desenvolvedor <span>DEV FRONT</span> e 
                        esse é meu portifólio para apresentar um pouco sobre mim e meus projetos,
                        espero que goste :<text>&#41;</text>
                    </text>
                </div>
            </div>
        </Container>
    )
}