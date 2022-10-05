import styled from "styled-components"
import logo from "../assets/icons/icons8-c-programming-96.png"

export function Nav(){
    return(
        <StyledNav>
            <div className="logoHolder">
                <img src={logo} alt="amitanshu sahu logo"/>
            </div>
            <div className="linkHloder">
                <ul>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    z-index: 100;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width:99%;
    position: sticky;
    top:0;
    background-color: #000000ba;
    backdrop-filter: blur(2px);
    .logoHolder{
        width:2rem;
        height:2rem;
        padding: 10px;
        margin: 10px;
        img{
            width:2rem;
        }
    }
    li{
        list-style: none;
        display: inline-block;
        padding:10px;
        margin: 10px;
        cursor: pointer;
        /* transition: 1s; */
        &:hover{
            border-bottom: 2px solid yellow;
        }
    }
`