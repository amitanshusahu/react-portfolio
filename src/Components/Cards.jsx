import styled from "styled-components";
import imagegit from "../assets/icons/icons8-github-96.png"
export function Cards({img}){
 //! image with - 300x
 //! image height - 140x
    return(
        <>
        <StyledCard>
            <div className="image-holder">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <h3>Project : Title Goes Here</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nulla cumque sequi quis. Nisi, quia temporibus esse quibusdam amet libero, voluptatum velit dicta cupiditate incidunt accusamus nam error sed explicabo!
                </p>
                <p>
                    Tech:  html, css, js
                </p>
                <div className="redirects">
                    <span><img src={imagegit} alt="img" /><a className="link-small" href="">View Code</a></span>
                    <span><img src={imagegit} alt="img" /><a className="link-small" href="">View Code</a></span>
                </div>
            </div>
        </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    width: 300px;
    height: 400px;
    background-color: #131313;
    border-radius: 10px;
    margin: 30px;
    margin-right: 15px;
    &:hover{
        transition: 0.2s ease-in-out;
        scale: 1.02;
    }
    .image-holder{
        width: 100%;
        height: 35%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .description{
        padding: 20px;
        p{
            font-size: 14px;
            color: #b4b4b4;
            margin-top: 20px;
        }
    }
    .redirects{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        img{
            width: 16px;
            height: 16px;
            padding-bottom: 0;
            margin-bottom: -3px;
        }
        a{
            font-size: 14px;
            color: #b4b4b4;
            padding: 5px;
        }
    }
`