import styled from 'styled-components';

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    padding: 0rem 4rem;

    h1{
        color: var(--fontColor);
        font-family: 'Bebas Neue', sans-serif;

        text{
            color: var(--secondaryColor);
            font-family: 'Bebas Neue', sans-serif;
        }
    }

    ul{
        padding-right: 1rem;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li{
            cursor: pointer;
            padding-left: 6.5rem;
            color: var(--fontColor);
        }
    }
`