import { Container } from "./style";

type ProjectComponentProps = {
    href: string;
}

export function ProjectComponent(props: ProjectComponentProps){
    return(
        <Container>
            <a href={props.href}></a>
        </Container>
    )
}