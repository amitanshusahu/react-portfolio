import React, {useState} from "react"
import styled from "styled-components"
import { Cards } from "./Cards"
import rightArrow from "../assets/icons/icons8-right-arrow-64.png"
import Image1 from "../assets/banners/loopholetech.jpeg"
import Image2 from "../assets/banners/amitanshusahu.jpeg"
import Image3 from "../assets/banners/ganga.jpeg"
import Image4 from "../assets/banners/studybuddy.jpeg"
export function Work(){    
    return(
        <StyledSection>
            <h2>Recent Works</h2>
            <div className="cards-holder">
                <Cards img ={Image1}/>
                <Cards img ={Image2}/>
                <Cards img ={Image3}/>
                <Cards img ={Image4}/>
                <Cards img ={Image1}/>
                <Cards img ={Image4}/>
            </div>
            <div className="viewMore">
                <a className="link" href="">View More <img src={rightArrow} alt="" /></a>
            </div>
        </StyledSection>
        
        )
    }

const StyledSection = styled.section`
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        margin: 30px;
        margin-top: 50px;
    }
    .cards-holder{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-grow: 1.5;
    }
    .viewMore{
        width: 95%;
        text-align: right;
        margin: 30px;
        a{
            color: #d5d5d5;
            font-size: 20px;
            text-decoration: none;
            margin-right: 20px;
            &:hover img{
                transition: 0.3s ease-in-out;
                padding-left: 15px;
                margin-right: -15px;
            }
            img{
                width: 40px;
                height: 30px;
                margin-bottom: -10px;
            }
        }
    }
`