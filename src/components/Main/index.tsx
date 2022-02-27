import { SkillComponent } from "../SkillComponent";
import { Container } from "./style";


export function Main(){
    return(
        <Container>
            <div className="home" id="home">
                <div className="header" >
                    <h1>Olá, Meu nome é <br/><span>Mateus</span></h1>
                </div>
            </div>
            <div className="about" id="about">
                <div className="text" >
                    <h1>Sobre</h1>
                    <text>
                        Estou começando minha carreira como desenvolvedor <span>FRONT-END</span> e 
                        esse é meu portifólio para apresentar um pouco sobre mim e meus projetos,
                        espero que goste :<text>&#41;</text>
                    </text>
                </div>
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <SkillComponent text="HTML"/>
                <SkillComponent text="CSS"/>
                <SkillComponent text="REACT.JS"/>
                <SkillComponent text="TYPESCRIPT"/>
                <SkillComponent text="SASS"/>
                <SkillComponent text="JAVASCRIPT"/>
            </div>
        </Container>
    )
}