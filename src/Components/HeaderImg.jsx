import styled from "styled-components"
const StyledSvg = styled.div`
    height: 100vh;
    z-index: -1;
    position: absolute;
    svg{
        height: 100vh;
        width:100vw;
    }
   @media (prefers-reduced-motion: no-preference) {
    path{
    &:nth-child(2n){
        animation: waveup 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) alternate-reverse infinite;
    }
    &:nth-child(2n+1){
        animation: wavedwn 7s cubic-bezier(0.455, 0.03, 0.515, 0.955)  alternate infinite;
    }
   }
   @keyframes waveup {
    to{
        transform: rotateX(0deg);
    }
    from{
        transform: rotateX(30deg);
    }
   }
   @keyframes wavedwn {
    to{
        transform: rotateX(30deg);
    }
    from{
        transform: rotateX(0deg);
    }
   }
   }
   
`
export function HeaderImg(){

    return(
        <StyledSvg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1195&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="url(#SvgjsLinearGradient1196)"></rect>
        <g transform="translate(0, 0)" strokeLinecap="round">
            <path d="M288 192.14 L288 367.86" strokeWidth="54" stroke="rgba(55, 255, 149, 1)"></path>
            <path d="M360 260.59 L360 299.41" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
            <path d="M432 237.29 L432 322.71" strokeWidth="54" stroke="rgba(255, 165, 0, 1)"></path>
            <path d="M504 141.37 L504 418.63" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
            <path d="M576 175.33 L576 384.67" strokeWidth="54" stroke="rgba(0, 255, 255, 1)"></path>
            <path d="M648 192.94 L648 367.06" strokeWidth="54" stroke="rgba(255, 165, 0, 1)"></path>
            <path d="M720 167.35 L720 392.65" strokeWidth="54" stroke="rgba(255, 165, 0, 1)"></path>
            <path d="M792 136.04 L792 423.96" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
            <path d="M864 204.91 L864 355.09" strokeWidth="54" stroke="rgba(0, 255, 255, 1)"></path>
            <path d="M936 132.72 L936 427.27" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
            <path d="M1008 233.74 L1008 326.26" strokeWidth="54" stroke="rgba(55, 255, 149, 1)"></path>
            <path d="M1080 257 L1080 303" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
            <path d="M1152 211.31 L1152 348.69" strokeWidth="54" stroke="rgba(255, 201, 2, 1)"></path>
        </g>
    </g>
    <defs>
        <mask id="SvgjsMask1195">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="15.28%" y1="139.29%" x2="84.72%" y2="-39.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1196">
            <stop stop-color="#0e2a47" offset="0"></stop>
            <stop stop-color="rgba(0, 191, 142, 1)" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M 0,94 C 57.6,122.2 172.8,240.4 288,235 C 403.2,229.6 460.8,65.2 576,67 C 691.2,68.8 748.8,237.4 864,244 C 979.2,250.6 1036.8,103.4 1152,100 C 1267.2,96.6 1382.4,201.6 1440,227L1440 560L0 560z" fill="#184a7e"></path>
        <path d="M 0,430 C 96,421.4 288,382.4 480,387 C 672,391.6 768,468.4 960,453 C 1152,437.6 1344,338.6 1440,310L1440 560L0 560z" fill="#2264ab"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1000">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg> */}
        </StyledSvg>
    )
}