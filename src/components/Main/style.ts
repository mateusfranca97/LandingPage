import styled from "styled-components";

export const Container = styled.main`
    .description{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        padding-top: 8rem;
        margin: 0rem 10rem;

        h1{
            font-size: 3rem;
            color: var(--fontColor);    
            font-family: 'Bebas Neue',sans-serif;
        }

        text{
            color: var(--fontColor);
            font-size: 2rem;
            font-weight: normal;

            span{
                color: var(--secondaryColor);
            }
        }
    }

    
`