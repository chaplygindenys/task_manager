import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import {ThemesContext} from "../../store/ThemesContext";


const ThemesButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 16px;
  top: 16px;
  background-color: ${props => props.themesButtonWrapperBgColor};
  color: ${props => props.mainBorderColor};
  border: 2px solid ${props => props.mainBorderColor};
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;


const  ChangeThemeButtonComponent=()=> {

    const {themes, isDarkMode, toggleTheme} = useContext(ThemesContext);

        return(

<ThemesButtonWrapper
    onClick={() => toggleTheme(!isDarkMode)}
    themesButtonWrapperBgColor={themes.themesButtonWrapperBgColor}
    mainBorderColor={themes.mainBorderColor}
>
    <FontAwesomeIcon
        className={'fa'} icon={isDarkMode ? faSun : faMoon}
    />
</ThemesButtonWrapper>
)}

export {ChangeThemeButtonComponent}