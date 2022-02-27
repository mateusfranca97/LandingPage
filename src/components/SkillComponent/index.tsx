import { Power } from "../Power"
import { Container } from "./style"

type SkillComponentProps = {
    text: string;

}

export function SkillComponent(props: SkillComponentProps){
    return(
        <Container>
            <div className="name">
                <li>{props.text}</li>
            </div>
           
            <div className="power">
                <Power/>
                <Power/>
                <Power/>
                <Power/>
                <Power/>
                <Power/>
            </div>

        </Container>
    )
}