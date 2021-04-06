import React, {useContext} from "react";
import styled from "styled-components";
import {ThemesContext} from "../../store/ThemesContext";
import {useLoginContext} from "../../store/LoginContext";

const InputWrapper = styled('input')`
  border: unset;
  font-size: 14px;
  width: 100%;
  border-bottom: 1px solid ${props => props.inputUnderLineColor};
  background-color: ${props => props.addTaskFormWrapperBgColor};
  color: ${props => props.mainTextColor};
  height: 20px;

  &:focus {
    outline: none;
  }
`;
const InputComponent=({type,placeholder,name})=>{
    const {themes} = useContext(ThemesContext);
    const loginData = useLoginContext()
    return(
        <InputWrapper
            type={type}
            placeholder={placeholder}
            name={name}
            mainTextColor={themes.mainTextColor}
            addTaskFormWrapperBgColor={themes.addTaskFormWrapperBgColor}
            inputUnderLineColor={themes.inputUnderLineColor}
            value={loginData[name]}
            onChange={(e)=>loginData.setInputValue({key:name, value: e.target.value})}
        />
    )
};
export {InputComponent}