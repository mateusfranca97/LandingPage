import styled from 'styled-components'

export const Container = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    background: var(--primaryColor);

    margin-left: 1rem; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;


    
    &:nth-child(1){
            background: var(--tertiaryColor);
    }

    &:nth-child(2){
            background: var(--tertiaryColor);
    }
    
`