import styled from "styled-components";

export function BigCards({img}){

    return(
        <>
        <StyledCard>
            <div className="cardImageHolder">
                <img src={img} alt="" />
            </div>
        </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    background-color: #1b1b1b;
    border-radius: 10px;
    display: flex;
    width: 70vw;
    overflow: hidden;
    .cardImageHolder{
        img{
            width : 40%;
            height: 100%;
        }
    }
`