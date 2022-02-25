import styled from 'styled-components';

export const Button = styled.button`
    color: var(--tertiaryColor);
    font-size: 1.2rem;
    background: var(--primaryColor);
    transition: .5s;
    border: solid 3px var(--tertiaryColor);
    border-radius: 40px;
    height: 3.5rem;
    width: 18rem;
    position: fixed;
    bottom: 2rem;
    left: 68rem;
    cursor: pointer;

    &:hover{
        color: var(--primaryColor);
        background: var(--tertiaryColor);
        transition: .5s;
    }
`