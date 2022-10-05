import styled from "styled-components";
export const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
  .gradient {
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, black);
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      .dp-holder {
        width: 50vw;
        max-width: 300px;
        max-height: 300px;
        height: 50vw;
        overflow: hidden;
        border-radius: 50%;
        /* border: 10px solid ; */
        box-shadow: 0px 1px 3px 10px rgba(255, 255, 255, 0.2) ;
        img {
          width: 50vw;
          max-width: 300px;
          margin-top: -20px; //! temp code
        }
      }
      .profile-content {
        margin: 10px;
        h1 {
          margin: 10px;
        }
        .name {
          font-size: 40px;
          color: cyan;
        }
      }
      .btn-holder {
        button {
          margin: 10px;
          padding: 10px;
          color: black;
          background-color: yellow;
          border: none;
          border-radius: 10px;
          font-size: large;
          font-weight: bold;
          &:hover{
            scale: 0.9;
          }
        }
      }
    }
  }
`;
