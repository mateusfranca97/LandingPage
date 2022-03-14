import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

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
    left: 64rem;
    cursor: pointer;

    &:hover{
        color: var(--primaryColor);
        background: var(--tertiaryColor);
        transition: .5s;
    }

    @media(min-width: 1367px){
        left: 71rem;
    }
`