import { ProjectComponent } from "../ProjectComponent";
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

            <div className="skills" id="skills">
                <h1>Skills</h1>
                <SkillComponent text="HTML"/>
                <SkillComponent text="CSS"/>
                <SkillComponent text="REACT.JS"/>
                <SkillComponent text="TYPESCRIPT"/>
                <SkillComponent text="SASS"/>
                <SkillComponent text="JAVASCRIPT"/>
            </div>

            <div className="portfolio" id="portfolio">
                <h1>Meus Projetos</h1>
                <div className="projectList">
                    <ProjectComponent href="https://github.com/mateusfranca97/ws_dtmoney"/>
                    <ProjectComponent href="#"/>
                    <ProjectComponent href="#"/>
                </div>
            </div>
        </Container>
    )
}