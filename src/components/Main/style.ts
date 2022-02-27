import styled from "styled-components";

export const Container = styled.main`

    padding-top: 8rem;
    margin: 0rem 5rem;

    h1,span{
        font-size: 3rem;
        color: var(--fontColor);    
        font-family: 'Bebas Neue',sans-serif;
    }

    .text{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
    }

    .home{
        height: 65vh;
        padding-top: 14rem;

        h1, span{
            margin-top: 5rem;

            span{
                color: var(--secondaryColor);
            }
        }
    }

    .about{
        padding-top:12rem;
        height: 65vh;

        text{
            color: var(--fontColor);
            font-size: 2rem;
            font-weight: normal;
            
            span{
                font-family:'Nunito', sans-serif;
                font-size: 2rem;
                color: var(--secondaryColor);
            }
        }
    }

    .skills{
        display: flex;
        flex-direction: column;
        padding-top: 2rem;

        height:100vh;

        h1{
            margin-left: 47%;
            padding-bottom: 1rem;
        }
    }
`