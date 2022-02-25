import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        margin: 0rem 5rem;
        color: var(--fontColor);
        font-family: 'Bebas Neue', sans-serif;

        text{
            color: var(--secondaryColor);
            font-family: 'Bebas Neue', sans-serif;
        }
    }

    ul{
        display: flex;
        gap: 1rem;
        margin-right:3.5rem;
        list-style-type: none;

        li{
            display: flex;
            justify-content: center;
            align-items: center;
            width:6rem;
            height: 2rem;
            color: var(--fontColor);
            cursor: pointer;
        }
    }
`