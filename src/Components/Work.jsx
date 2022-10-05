import React, {useState} from "react"
import styled from "styled-components"
import { BigCards } from "./BigCards"
import Image1 from "../assets/banners/loopholetech.jpeg"
import Image2 from "../assets/banners/amitanshusahu.jpeg"
import Image3 from "../assets/banners/ganga.jpeg"
import Image4 from "../assets/banners/studybuddy.jpeg"
export function Work(){
    // const imageList = [Image1 , Image2, Image3, Image4];
    const imageList = [
        {img : Image1},
        {img : Image2},
        {img : Image3},
        {img : Image4}
    ]
    let arrLength = imageList.length;
    const [current , setCurrent] = useState(0);
    
    // setInterval(() => {
    //     setCurrent(current == arrLength ? 0 : current + 1)

    // }, 2000);
    
    return(
        <StyledSection>
            <h1>Recent Works</h1>
            {
                imageList.map((data, index)=>{
                    return(
                        <div className={index == current ? "slide-active" : "slide"}>
                            <div className="card">
                                <div className="cardImageHolder">
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="viewMore">
                <a href="#">View more -</a>
            </div>
        </StyledSection>
        
        )
    }

const StyledSection = styled.section`
    height: fit-content;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin: 30px;
        margin-top: 70px;
        font-size: 40px;
        color: #a7a7a7;
    }
    .card{
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
    }
    .slide{
        margin: 30px;
        display: none;
    }
    .slide-active{
        margin: 30px;
        display:black;
    }
    .viewMore{
        width: 95%;
        text-align: right;
        a{
            padding: 30px;
        }
    }
`