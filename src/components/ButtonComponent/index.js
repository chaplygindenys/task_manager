import React, {useContext} from "react";
import styled from "styled-components";
import {ThemesContext} from "../../store/ThemesContext";
import {useUserContext} from "../../store/UserContext";
import {authUser} from "../../servises/authService";
import {useLoginContext} from "../../store/LoginContext";


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
    const {loginAction} =useUserContext();
    const {themes} = useContext(ThemesContext);
    const loginData = useLoginContext()
    const loginHandler =async ()=>{
       try {
           const result = await authUser({email:loginData.email, password:loginData.password});
           loginAction();
       }catch (e) {

       }
    }

    return(
        <ButtonWrapper
            onClick={loginHandler}
            tabWrapperBgColor={themes.tabWrapperBgColor}
            tabWrapperShadowColor={themes.tabWrapperShadowColor}
            mainTextColor={themes.mainTextColor}
        >
            {children}
        </ButtonWrapper>
    )
};
export {ButtonComponent}