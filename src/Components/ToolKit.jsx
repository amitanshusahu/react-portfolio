import styled from "styled-components";
import { Tools } from "./Tools";
import icon1 from "../assets/icons/icons8-css3-96.png"
import icon2 from "../assets/icons/icons8-javascript-96.png"
import icon3 from "../assets/icons/icons8-c++-96.png"
import icon4 from "../assets/icons/icons8-c-programming-96.png"
import icon5 from "../assets/icons/icons8-cash-app-96.png"
import icon6 from "../assets/icons/icons8-html-5-96.png"
import icon7 from "../assets/icons/icons8-node-js-96.png"
import icon8 from "../assets/icons/icons8-python-96.png"
import icon9 from "../assets/icons/icons8-visual-studio-code-2019-96.png"
import icon10 from "../assets/icons/icons8-github-96.png"
import { useRef , useEffect } from 'react';

export function ToolKit(){
    const myRef = useRef();
    useEffect(()=>{
        // console.log(myRef.current.childNodes)
        // const observer = new IntersectionObserver((entries) =>{
        //     console.log(entries)
        // })
        // observer.observe(myRef.current)
    },[])
    return(
        <StyledToolKit>
            <h2>My Toolset</h2>
            <div className="tools-holder">
                <Tools img = {icon1} myRef = {myRef} tooltip="css"/>
                <Tools img = {icon2} tooltip="css"/>
                <Tools img = {icon3} tooltip="css"/>
                <Tools img = {icon4} tooltip="css"/>
                <Tools img = {icon5} tooltip="css"/>
                <Tools img = {icon6} tooltip="css"/>
                <Tools img = {icon7}tooltip="css"/>
                <Tools img = {icon8} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon9} tooltip="css"/>
                <Tools img = {icon10} tooltip="css"/>
            </div>
        </StyledToolKit>
    )
}
const StyledToolKit = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 60px;
    h2{
        margin: 30px;
        margin-bottom: 60px;
    }
    .tools-holder{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1.5;
        flex-wrap: wrap;
        margin: 30px;
    }
    @media only screen and (max-width:"600px"){
            margin: 30px; // ! not working
    }
`