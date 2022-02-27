import styled from 'styled-components'

export const Container = styled.li`
    
    *{
        font-family:'Bebas Neue';
    }

    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--fontColor);
    font-size: 3rem;
    
    height:4.5rem;
    background: var(--backgroundSkill);
    border-radius: 1rem;
    margin-bottom: .5rem;
    
    .name{
        width: 50%;
        margin-left: 2rem;
    }

    .power{
        display: flex;
        width: 50%;
        margin-right: 2rem;
    }
    
`