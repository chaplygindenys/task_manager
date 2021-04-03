import React, {useContext} from "react";
import styled from "styled-components";
import {ThemesContext} from "../../Themes/ThemesContext";


const ButtonWrapper = styled('button')`
  border: none;
  padding: 16px;
  cursor: pointer;
  margin: 16px 0;
  background-color: ${props => props.tabWrapperBgColor};
  box-shadow: 0 2px 6px 0 ${props => props.tabWrapperShadowColor};
  color: ${props => props.mainTextColor};
  border-radius: 4px ;
  font-size: 16px;
  &:focus {
    outline: none;
  }

`;
const ButtonComponent =({children})=>{
    const {themes} = useContext(ThemesContext);
    return(
        <ButtonWrapper
            tabWrapperBgColor={themes.tabWrapperBgColor}
            tabWrapperShadowColor={themes.tabWrapperShadowColor}
            mainTextColor={themes.mainTextColor}
        >
            {children}
        </ButtonWrapper>
    )
};
export {ButtonComponent}