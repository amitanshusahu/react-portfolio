import styled from "styled-components"

export function Tools({img , tooltip ,myRef}){
    return(
        <StyledTools ref={myRef}>
            <div className="img-holder">
            <img src={img}/>
            <span>{tooltip}</span>
            </div>
        </StyledTools>
    )
}

const StyledTools = styled.div`
    .img-holder{
        position: relative;
        img{
            width: 95px ;
            height: 95px ;
        }
        span{
            position: absolute;
            z-index: 1000;
            left: 0;
            bottom: 0px;
            padding: 10px;
            padding-top: 2px;
            padding-bottom: 5px;
            background-color: #2a2a2a;
            border-radius: 5px;
            opacity: 0;
        }
        &:hover{
            transition: 0.3s ease-in-out;
            scale: 1.02;
            filter: drop-shadow(0px 0px 10px #e4e4e421);
        }
        &:hover span{
            transition: 0.3s ease-in-out;
            opacity: 1;
            z-index: 1000;
        }
    }
    
`