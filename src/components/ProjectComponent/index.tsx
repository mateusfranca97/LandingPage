import { Container } from "./style";

type ProjectComponentProps = {
    href: string;
    target: string;
}

export function ProjectComponent(props: ProjectComponentProps){
    return(
        <Container href={props.href} target={props.target}>
            
        </Container>
    )
}