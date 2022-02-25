import styled from "styled-components";

export const Container = styled.main`

    padding-top: 8rem;
    margin: 0rem 5rem;


    .home{
        height: 70vh;

        h1, span{
            margin-top: 5rem;
            font-family: 'Bebas Neue';
            font-size: 3rem;
            color: var(--fontColor);

            span{
                color: var(--secondaryColor);
            }
        }
    }

    .about{
        height: 65vh;

        .text{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;

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