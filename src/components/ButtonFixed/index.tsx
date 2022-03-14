import { Container } from './styles'

type ButtonFixedProps = {
    href: string;
    target: string;
}

export function ButtonFixed(props: ButtonFixedProps){
    return(
        <Container href={props.href} target={props.target}>
            <text >Fale comigo :<span>&#41;</span> </text>
        </Container>
    )
}