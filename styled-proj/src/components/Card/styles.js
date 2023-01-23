import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 24px;

`

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;

`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px;

`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }

`